package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class LikeInfoVO {
    private Integer lki_seq;
    private Integer lki_aci_seq;
    private Integer lki_prod_seq;
    private Integer lki_prod_table_num;
    private Date lki_reg_dt;
}
