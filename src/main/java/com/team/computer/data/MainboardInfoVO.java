package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class MainboardInfoVO {
    private Integer mii_seq;
    private Integer mii_img_seq;
    private String mii_name;
    private String mii_model_name;
    private String mii_company;
    private Integer mii_price;
    private Integer mii_fomr_factor;
    private String mii_power_supply;
    private String mii_memory_version;
    private Integer mii_memory_socket;
    private Date mii_release_dt;
    private Integer mii_pclex16_num;
    private Integer mii_pclex1_num;
    private String mii_sata_version;
    private Integer mii_sata_num;
    private Date mii_reg_dt;
}
