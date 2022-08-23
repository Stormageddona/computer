package com.team.computer.api;

import java.io.File;
import java.lang.reflect.Field;

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
    @Value("${spring.servlet.multipart.location}")
    String uploadpath;

    @PostMapping("/image/upload")
    @SneakyThrows
    public String upload(@RequestPart MultipartFile upload, HttpServletRequest request) {
        String sourceName = upload.getOriginalFilename();
        String sourceExt = FilenameUtils.getExtension(sourceName).toLowerCase();

        File destFile;
        String destFileName;

        do {
            destFileName = RandomStringUtils.randomAlphabetic(8).concat(".").concat(sourceExt);
            destFile = new File(uploadpath.concat(destFileName));
            log.info("{}", uploadpath.concat(destFileName));
        }while (destFile.exists());
        destFile.getParentFile().mkdirs();
        upload.transferTo(destFile);

        // String imgUrl = request.getScheme().concat("//").concat(request.getServerName()+":8080").concat(uploadPath);
        String imgUrl = request.getScheme().concat("//").concat(request.getServerName()+":8080").concat(uploadpath);

        // return request.getScheme().concat("://").concat(request.getServerName()).concat(uploadPath).concat(destFileName);
        System.out.println("경로 : "+imgUrl);
        return imgUrl;
    }
}
