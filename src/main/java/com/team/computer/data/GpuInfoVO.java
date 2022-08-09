package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class GpuInfoVO {
    private Integer gpi_seq;
    private Integer gpi_img_seq;
    private String gpi_name;
    private String gpi_model_name;
    private String gpi_company;
    private Integer gpi_price;
    private String gpi_lineup;
    private Integer gpi_processor_num;
    private Integer gpi_boost_clock;
    private Integer gpi_memory_volume;
    private Date gpi_release_dt;
    private Date gpi_reg_dt;
    private String gpi_interface;
    private Integer gpi_dp_num;
    private Integer gpi_hdmi_num;
    private Integer gpi_length;
    private Integer gpi_power_use;

    private String img_src;
}
