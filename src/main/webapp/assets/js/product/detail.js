$("document").ready(function(){
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let seq = param.get('seq');
    let type = param.get('type');
    $.ajax({
        url:"/api/product/detail?type="+type+"&seq="+seq,
        type:"get",
        success:function(r) {
            console.log(r);
            console.log(r.length);

            // 상품 이름, 모델명 내보내기
            $(".detail_product_info h3").html(""+r.name+"("+r.model_name+")")
            let release = new Date(r.release_dt) ;
            let date = release.getFullYear() + "-" + release.getMonth() + "-" + release.getDate();
            let won = r.price.toLocaleString();

            let tag =
            // 공용 내용
            '<span class="'+date+'">출시일 : '+date+'</span> '+
            '<span class="'+r.price+'">출고가 : '+won+'</span> '+
            '<span class="'+r.company+'">제조사 : '+r.company+'</span> '+
            
            // etc 기타 공용
            '<span class="'+r.type+'">타입 : '+r.type+'</span> '+
            '<span class="'+r.volume+'">용량 : '+r.volume+'</span> '+

            // cpu
            '<span class="'+r.clock+'">기본클럭 : '+r.clock+'</span> '+
            '<span class="'+r.thread_num+'">쓰레드 갯수 : '+r.thread_num+'</span> '+
            '<span class="'+r.core_num+'">코어갯수 : '+r.core_num+'</span> '+
            '<span class="'+r.cache+'">L3 캐쉬 :'+r.cache+'</span> '+
            '<span class="'+r.graphic+'">내장그래픽 유무 : '+r.graphic+'</span> '+

            // gpu 그래픽카드
            '<span class="'+r.boost_clock+'">부스트 클럭 : '+r.boost_clock+'Hz</span> '+
            '<span class="'+r.dp_num+'">출력단자 : DP'+r.dp_num+', HDMI'+r.hdmi_num+'</span> '+
            '<span class="'+r.interface+'">인터페이스 : '+r.interface+',</span> '+
            '<span class="'+r.length+'">크기 : '+r.length+'</span> '+
            '<span class="'+r.lineup+'">라인업 : '+r.lineup+'</span> '+
            '<span class="'+r.memory_volume+'">메모리 용량 : '+r.memory_volume+'</span> '+
            '<span class="'+r.power_use+'">파워 사용량 : '+r.power_use+'</span> '+

            // cooler 쿨러
            '<span class="'+r.size+'">사이즈 : '+r.size+'</span> '+
            '<span class="'+r.noize+'">소음 : '+r.noize+'</span> '+
            
            // memory 메모리
            '<span class="'+r.clock+'">타입 : '+r.type+'</span> '+


            // case 케이스
            '<span class="'+r.use_board+'">사용가능 보드 : '+r.use_board+'</span> '+
            '<span class="'+r.save_socket_num+'">저장소켓 : '+r.save_socket_num+'</span> '+
            
            // mainboard 메인보드
            '<span class="'+r.fomr_factor+'">폼팩터 : '+r.fomr_factor+'</span> '+
            '<span class="'+r.power_supply+'">파워 서플라이 : '+r.power_supply+'</span> '+
            '<span class="'+r.memory_version+'">메모리 버전 : '+r.memory_version+'</span> '+
            '<span class="'+r.memory_socket+'">메모리 소켓 : '+r.memory_socket+'</span> '+
            '<span class="'+r.pclex16_num+'">pclex16 : '+r.pclex16_num+'</span> '+
            '<span class="'+r.pclex1_num+'">pclex1 : '+r.pclex1_num+'</span> '+
            '<span class="'+r.sata_version+'">SATA버젼 : '+r.sata_version+'</span> '+
            '<span class="'+r.sata_num+'">사타케이블 수 : '+r.sata_num+'</span> '+

            // hdd 하드디스크, ssd 공용
            '<span class="'+r.read_speed+'">읽기속도 : '+r.read_speed+'</span> '+
            '<span class="'+r.write_speed+'">쓰기속도 : '+r.write_speed+'</span> '+
            
            // power 파워
            '<span class="'+r.reted_power+'">쓰기속도 : '+r.reted_power+'</span> '+
            '<span class="'+r.size+'">쓰기속도 : '+r.size+'</span> '+
            
            // ssd
            '<span class="'+r.standard+'">쓰기속도 : '+r.standard+'</span> '+
            '<span class="'+r.interface+'">쓰기속도 : '+r.interface+'</span> '


            // '<span class="'+r.+'">'+r.+'</span> '
            $(".product_info").append(tag)

            $(".undefined").hide();
        }
    })
})