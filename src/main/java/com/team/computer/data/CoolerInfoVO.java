package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class CoolerInfoVO {
    private Integer coi_seq;
    private Integer coi_img_seq;
    private String coi_name;
    private String coi_model_name;
    private String coi_company;
    private Integer coi_price;
    private Date coi_release_dt;
    private Date coi_reg_dt;
    private Integer coi_type;
    private Integer coi_size;
    private Integer coi_noize;

    private String img_src;
}
