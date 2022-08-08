package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class CaseInfoVO {
    private Integer csi_seq;
    private Integer csi_img_seq;
    private String csi_name;
    private String csi_model_name;
    private String csi_company;
    private Integer csi_price;
    private Integer csi_size;
    private Integer csi_save_socket_num;
    private Date csi_release_dt;
    private Integer csi_use_board;
    private Date csi_reg_dt;

    private String img_src;
}
