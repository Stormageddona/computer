package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class SsdInfoVO {
    private Integer sdi_seq;
    private Integer sdi_img_seq;
    private String sdi_name;
    private String sdi_model_name;
    private String sdi_company;
    private Integer sdi_price;
    private String sdi_standard;
    private String sdi_interface;
    private Integer sdi_volume;
    private Date sdi_release_dt;
    private Integer sdi_read_speed;
    private Integer sdi_write_speed;
    private Date sdi_reg_dt;

    private String img_src;
}
