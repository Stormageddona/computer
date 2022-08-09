package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class CpuInfoVO {
    private Integer cpi_seq;
    private Integer cpi_img_seq;
    private String cpi_name;
    private String cpi_model_name;
    private String cpi_company;
    private Integer cpi_price;
    private Date cpi_release_dt;
    private Date cpi_reg_dt;
    private Integer cpi_core_num;
    private Integer cpi_thread_num;
    private Integer cpi_clock;
    private Integer cpi_cache;
    private Integer cpi_graphic;

    private String img_src;
}
