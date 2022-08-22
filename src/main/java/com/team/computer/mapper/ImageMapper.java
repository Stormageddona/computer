package com.team.computer.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ImageMapper {
    
    public void insertImage(Map<String,Object> path) ;
    public void deleteImage(Integer seq) ;
    public String selectImage(Integer seq) ;
    public void ModyfiImagePath(String path) ;
    
}
