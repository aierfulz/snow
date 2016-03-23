/**
 * Created by Administrator on 2016/3/2.
 */
var map;
function onLoad()
{
    map = new TMap("mapDiv");
    map.centerAndZoom(new TLngLat(116.36976,39.92974),9);
    //允许鼠标双击地图放大
    map.enableDoubleClickZoom();
    //允许鼠标滚轮缩放地图
    map.enableHandleMouseScroll();
    //创建地图类型控件对象
    var control = new TMapTypeControl({mapTypes:[TMAP_SATELLITE_MAP, TMAP_HYBRID_MAP]});
    //将地图类型控件添加到地图上
    map.addControl(control);
    //设置默认显示卫星图
    map.setMapType(TMAP_SATELLITE_MAP);
//			//设置地图类型控件在地图上显示的位置，默认为在右侧，注：将控件加载到map之后再做此配置
//			control.setLeft(10);
//	        control.setTop(20);
    map.enableHandleMouseScroll();
    //创建比例尺控件对象
    var scale = new TScaleControl();
    //添加比例尺控件
    map.addControl(scale);
    //放大缩小
    var config = {
        type:"TMAP_NAVIGATION_CONTROL_LARGE",	//缩放平移的显示类型
        anchor:"TMAP_ANCHOR_TOP_LEFT",			//缩放平移控件显示的位置
        offset:[0,0],							//缩放平移控件的偏移值
        showZoomInfo:true						//是否显示级别提示信息，true表示显示，false表示隐藏。
    };
    //创建缩放平移控件对象
    control=new TNavigationControl(config);
    //添加缩放平移控件
    map.addControl(control);
}
