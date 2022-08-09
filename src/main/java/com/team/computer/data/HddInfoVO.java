package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class HddInfoVO {
    private Integer hdi_seq;
    private Integer hdi_img_seq;
    private String hdi_name;
    private String hdi_model_name;
    private String hdi_company;
    private Integer hdi_price;
    private Date hdi_release_dt;
    private Date hdi_reg_dt;
    private Integer hdi_volume;
    private Integer hdi_read_speed;
    private Integer hdi_write_speed;

    private String img_src;
}
