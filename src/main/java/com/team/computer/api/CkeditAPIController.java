package com.team.computer.api;


import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Calendar;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.SneakyThrows;

@RestController
public class CkeditAPIController {
    @Value("${spring.servlet.multipart.location}")
    String uploadpath;

    @Value("${image.upload.url}")
    String uploadurl;

    @GetMapping("/upload/computer/temp/{filename}")
    // ResponseEntity 
    // Resource = import org.springframework.core.io.Resource
    public ResponseEntity<Resource> getImages(@RequestPart MultipartFile upload,@PathVariable String type, @PathVariable String filename, HttpServletRequest request) throws Exception {
        String sourceName = upload.getOriginalFilename();
        String sourceExt = FilenameUtils.getExtension(sourceName).toLowerCase();

        String destFileName;

        destFileName = RandomStringUtils.randomAlphabetic(8).concat(".").concat(sourceExt);
        Path folderLocaion = Paths.get("/images/s"+uploadpath);
        Path target = folderLocaion.resolve(destFileName);
        Resource r = null;
        try
        {
            r = new UrlResource(target.toUri());
        }
        catch(Exception e) {
            System.out.println("????????? ?????? ??? ?????????, ????????? ?????? ???????????????.");
        }

        // ????????? ?????? ????????? ???????????? ????????? ????????? ????????????.
        String contentType = null;
        try{
            request.getServletContext().getMimeType(r.getFile().getAbsolutePath());
            if(contentType == null)
            contentType = "application/octet-stream";
        }
        catch(Exception e) {
            System.out.println("????????? ?????? ??? ?????????, ????????? ?????? ???????????????.");
        }
        
        return ResponseEntity.ok()// ????????? 200 OK??? ??????
        // ????????? ????????? Spring????????? ????????? ?????? ?????? ????????? ??????
            .contentType(MediaType.parseMediaType(contentType))
            // ?????? ????????? ?????? ????????? ?????? (???????????? ?????? ????????? ?????? ??????)
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename*=\""+r.getFilename()+"\"")
            // ?????? ???????????? Body??? ??????
            .body(r);
    }

    @PostMapping("/image/upload")
    @SneakyThrows
    public String upload(@RequestPart MultipartFile upload, @RequestParam("CKEditorFuncNum") String callback, HttpServletRequest request,@RequestParam @Nullable Boolean temp ) throws Exception {
        // String sourceName = upload.getOriginalFilename();
        // String sourceExt = FilenameUtils.getExtension(sourceName).toLowerCase();



        // if (!ext.equalsIgnoreCase("jpg") && !ext.equalsIgnoreCase("png")  &&  !ext.equalsIgnoreCase("gif") )
        // {            
        //     resultMap.put("status", false) ;
        //     resultMap.put("message", "????????? ?????? ???????????? jpg, png, gif??? ???????????????.") ;
        //     return resultMap ;
        // }

        // File destFile;
        // String destFileName;
        
        // System.out.println(uploadpath);

        // do {
        String Location = temp!=null && temp?"/temp":"/board" ;
        Path forderLocaion = Paths.get(uploadpath+"/images"+Location) ;
        String fileName = upload.getOriginalFilename() ;
        String[] fileNameSplit = fileName.split("\\.") ;
        String ext = fileNameSplit[fileNameSplit.length - 1] ;
        Calendar c = Calendar.getInstance() ;
        String saveFileName = StringUtils.cleanPath("img_" + c.getTimeInMillis() + "." +ext) ;
        Path target =forderLocaion.resolve(saveFileName) ;
        // destFileName = RandomStringUtils.randomAlphabetic(8).concat(".").concat(sourceExt);
        // Path folderLocaion = Paths.get(uploadpath);
        // Path target = folderLocaion.resolve("/images/"+saveFileName);
        // destFile = new File(uploadpath+"/"+destFileName);
        // log.info("{}", uploadpath.concat(uploadpath+"/"+destFileName));
        try {
            Files.copy(upload.getInputStream(),target,StandardCopyOption.REPLACE_EXISTING);
        } catch (Exception e) {
            // resultMap.put("status", false) ;
            // resultMap.put("message", e.getMessage()) ;
            e.printStackTrace();
            // System.out.println();
            // return "Success" ;
        }
        // }while (destFile.exists());

        // destFile.getParentFile().mkdir();
        // upload.transferTo(destFile);

        String imgUrl = "/image"+Location+"/"+saveFileName;
        // System.out.println(imgUrl);
        // //ckedit upload callback
        StringBuffer sb = new StringBuffer();
        sb.append("<script type='text/javascript'>window.parent.CKEDITOR.tools.callFunction(");
        sb.append(callback);
        sb.append(", '");
        // sb.append(testUrl);
        sb.append(imgUrl);
        
        sb.append("', 'image upload success!!')</script>");
        System.out.println(sb.toString());
        // return imgUrl;
        return sb.toString();
    }
}
