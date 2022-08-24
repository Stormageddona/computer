package com.team.computer.api;

import java.io.File;
import java.lang.reflect.Field;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/ckedit")
@Slf4j
public class CkeditAPIController {
    @Value("${image.upload.path}")
    String uploadpath;

    @Value("${image.upload.url}")
    String uploadurl;

    @PostMapping("/image/upload")
    @SneakyThrows
    public String upload(@RequestPart MultipartFile upload, @RequestParam("CKEditorFuncNum") String callback, HttpServletRequest request) {
        String sourceName = upload.getOriginalFilename();
        String sourceExt = FilenameUtils.getExtension(sourceName).toLowerCase();
        
        // File destFile;
        String destFileName;
        
        // System.out.println(uploadpath);

        // do {
        destFileName = RandomStringUtils.randomAlphabetic(8).concat(".").concat(sourceExt);
        Path folderLocaion = Paths.get(uploadpath);
        Path target = folderLocaion.resolve(destFileName) ;
        // destFile = new File(uploadpath+"/"+destFileName);
        // log.info("{}", uploadpath.concat(uploadpath+"/"+destFileName));
        try {
            System.out.println(folderLocaion.toString());
            System.out.println(target.toString());
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

        String imgUrl = uploadpath+"/"+destFileName;
        String testUrl = "/api/ckedit/image/upload"+imgUrl+destFileName;
        System.out.println(imgUrl);
        //ckedit upload callback
        StringBuffer sb = new StringBuffer();
        sb.append("<script type='text/javascript'>window.parent.CKEDITOR.tools.callFunction(");
        sb.append(callback);
        sb.append(", '");
        // sb.append(testUrl);
        sb.append("C:"+imgUrl);
        sb.append("', 'image upload success!!')</script>");

        // return imgUrl;
        return sb.toString();
    }
}
