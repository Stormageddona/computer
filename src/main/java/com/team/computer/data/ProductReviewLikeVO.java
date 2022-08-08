package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class ProductReviewLikeVO {
    private Integer prli_seq;
    private Integer prli_pri_seq;
    private Integer prli_aci_seq;
    private Date prli_reg_dt;
}
