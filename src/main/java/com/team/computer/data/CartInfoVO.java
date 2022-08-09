package com.team.computer.data;

import lombok.Data;

@Data
public class CartInfoVO {
    private Integer ci_seq;
    private Integer ci_aci_seq;
    private Integer ci_prod_table_num;
    private Integer ci_prod_seq;
    private Integer ci_prod_count;

    private String img_src;
}
