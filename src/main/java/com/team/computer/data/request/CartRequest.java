package com.team.computer.data.request;

import lombok.Data;

@Data
public class CartRequest {
    private String ci_table ;
    private Integer ci_seq ;
    private Integer ci_count ;
    private Integer ci_price ;
    private String ci_name ;
}
