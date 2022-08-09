package com.team.computer.data;

import java.sql.Date;

import lombok.Data;

@Data
public class PowerInfoVO {
    private Integer poi_seq;
    private Integer poi_img_seq;
    private String poi_name;
    private String poi_model_name;
    private String poi_company;
    private Integer poi_price;
    private Date poi_release_dt;
    private Date poi_reg_dt;
    private Integer poi_reted_power;
    private Integer poi_size;

    private String img_src;
}
