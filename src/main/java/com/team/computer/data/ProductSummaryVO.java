package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class ProductSummaryVO {
    private String tbl_name;
    private Integer seq;
    private String name;
    private String model_name;
    private String company;
    private Integer price;
    private Date release_dt;
    private String img_src;
}
