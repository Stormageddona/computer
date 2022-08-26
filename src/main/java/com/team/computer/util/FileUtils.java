package com.team.computer.util;


import org.springframework.beans.factory.annotation.Value;

public class FileUtils {
    static @Value("${spring.servlet.multipart.location}") String path;

    public static void MoveFile(String from , String after) throws Exception
    {
        System.out.println(path);
        return ;
        // File A = new File(path+from) ;
        // File B = new File(path+after) ;
        // Files.move(A.toPath(), B.toPath(), StandardCopyOption.REPLACE_EXISTING) ;
        
    }
}
