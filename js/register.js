/**
 * Created by huyiqing on 16/10/20.
 */
/*
* 用loop实现从1949-2000年数据的不冗余添加
* */
function addYear() {
    var date = document.getElementById('chooseD');
    for (var i = 1949; i <= 2000; i++) {
        date.options.add(new Option(i));
    }
}

/*
* 用数组保存城市数据方便多次调用
* */
function addPlace() {
    var place = new Array("青岛市南", "青岛市北", "青岛四方", "青岛李沧", "青岛崂山", "青岛城阳", "青岛黄岛", "青岛即墨"
        , "青岛胶州", "青岛胶南", "青岛平度", "青岛莱西", "--------", "山东", "北京", "天津", "上海", "重庆", "安徽", "江苏",
        "浙江", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "河南", "黑龙江", "湖北", "湖南", "吉林", "江西",
        "辽宁", "内蒙", "宁厦", "青海", "山西", "陕西", "四川", "西藏", "香港", "新疆", "云南");
    var city = document.getElementById('setP');
    for (var i = 0; i < place.length; i++) {
        city.options.add(new Option(place[i]));
    }
}

/*
* 同上
* */
function addSchool() {
    var sName = new Array("海大鱼山校区", "海大崂山校区", "海大浮山校区", "青大浮山校区", "青大东部校区", "青大四方校区",
        "青大登州路校区", "青岛大学师范学院", "青理工四方校区", "青理工黄岛校区", "青科大四方校区", "青科大崂山校区", "中国石油大学"
        , "青岛农业大学", "山东科技大学", "求实学院", "恒星学院", "远洋船员学院", "青岛飞洋学院", "其它");
    var university = document.getElementById('univ');
    for (var i = 0; i < sName.length; i++) {
        university.options.add(new Option(sName[i]));
    }
}

/*
* 将一个select里option的值赋给另一个select
* */
function addHome() {
    var homeAdd = document.getElementById('homeP');
    var homeIn = document.getElementById('liveP');
    for (var i = 1; i < homeIn.length; i++) {
        homeAdd.options.add(new Option(homeIn.options[i].value));
    }
}