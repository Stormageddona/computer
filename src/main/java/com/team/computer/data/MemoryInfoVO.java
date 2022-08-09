package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class MemoryInfoVO {
    private Integer mmi_seq;
    private Integer mmi_img_seq;
    private String mmi_name;
    private String mmi_model_name;
    private String mmi_company;
    private Integer mmi_price;
    private Date mmi_release_dt;
    private Date mmi_reg_dt;
    private Integer mmi_volume;
    private Integer mmi_clock;
    private Date mmi_type;

    private String img_src;
}
