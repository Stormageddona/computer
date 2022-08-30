package com.team.computer.component;

import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.BasicFileAttributes;
import java.nio.file.attribute.FileTime;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TempClearSchduler {
    String DATA_DIRECTORY = "d:/computer/images/temp";
    File dir = new File(DATA_DIRECTORY);



    @Scheduled(cron="0 */10 * * * *")
    public void ClearTempFolder() throws IOException
    {
        Calendar c = Calendar.getInstance() ;

                
        File files[] = dir.listFiles();
        for (File file : files) {
            if (c.getTimeInMillis() > fileCreatedInfo(file.toString())+1200000 )
            {
                Path pt = Paths.get(file.toString()) ;
                Files.delete(pt);
                System.out.println(file + "삭제 완료");
            }
        }

        System.out.println("청소 작업 완료");
    }
    


/**
     * 파일 생성 날짜 알아오기
     * @param path - 파일 위치
     */
    public long fileCreatedInfo(String path) {
        File file = new File(path);
        BasicFileAttributes attrs = null;
        FileTime time = null ;
        try {
            attrs = Files.readAttributes(file.toPath(), BasicFileAttributes.class);
            time = attrs.creationTime();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return time.toMillis() ;
    }

}
