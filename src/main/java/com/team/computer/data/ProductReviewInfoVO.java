package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class ProductReviewInfoVO {
    private Integer pri_seq;
    private Integer pri_aci_seq;
    private Integer pri_prod_seq;
    private Integer pri_prod_table_num;
    private String pri_imgs;
    private String pri_comment;
    private Date pri_reg_dt;
    private Date pri_mod_dt;
    private Date pri_del_dt;
    private Integer pri_rating;
}
