package com.team.computer.data;

import java.util.Date;

import lombok.Data;

@Data
public class BoardCountInfoVO {
    private Integer bci_seq;
    private Integer bci_aci_seq;
    private Integer bci_bdi_seq;
    private Date bci_count_dt;
}
