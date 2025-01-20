
<!-- <script type="text/javascript"> -->
<![CDATA[

theForm.oldSubmit = theForm.submit;
theForm.submit = WebForm_SaveScrollPositionSubmit;

theForm.oldOnSubmit = theForm.onsubmit;
theForm.onsubmit = WebForm_SaveScrollPositionOnSubmit;
Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadDockZone, {
        "clientID": "RadDockZone2",
        "clientStateFieldID": "RadDockZone2_ClientState",
        "fitDocks": false,
        "layoutID": "RadDockLayout1",
        "uniqueName": "RadDockZone2"
    }, null, null, $get("RadDockZone2"));
    $create(Telerik.Web.UI.RadDock, {
        "allowedZones": [],
        "clientStateFieldID": "WidgetControl4_ClientState",
        "dockMode": 2,
        "dockZoneID": "RadDockZone2",
        "forbiddenZones": [],
        "layoutID": "RadDockLayout1",
        "skin": "Default",
        "title": "WidgetControl4(100* 36 ) Left",
        "uniqueID": "WidgetControl4",
        "uniqueName": "WidgetControl4",
        "width": ""
    }, null, {
        "dockZone": "RadDockZone2"
    }, $get("WidgetControl4"));
    $create(Telerik.Web.UI.RadDock, {
        "allowedZones": [],
        "clientStateFieldID": "HeaderControl_ClientState",
        "dockMode": 2,
        "dockZoneID": "RadDockZone2",
        "forbiddenZones": [],
        "height": "82px",
        "index": 1,
        "layoutID": "RadDockLayout1",
        "skin": "Default",
        "title": "HeaderControl(25* 82 ) Left",
        "uniqueID": "HeaderControl",
        "uniqueName": "HeaderControl",
        "width": ""
    }, null, {
        "dockZone": "RadDockZone2"
    }, $get("HeaderControl"));
    $create(Telerik.Web.UI.RadDock, {
        "allowedZones": [],
        "clientStateFieldID": "MenuControl_ClientState",
        "dockMode": 2,
        "dockZoneID": "RadDockZone2",
        "forbiddenZones": [],
        "height": "82px",
        "index": 2,
        "layoutID": "RadDockLayout1",
        "skin": "Default",
        "title": "MenuControl(65* 82 ) Right",
        "uniqueID": "MenuControl",
        "uniqueName": "MenuControl",
        "width": ""
    }, null, {
        "dockZone": "RadDockZone2"
    }, $get("MenuControl"));
});
Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadDockZone, {
        "clientID": "RadDockZone1",
        "clientStateFieldID": "RadDockZone1_ClientState",
        "fitDocks": false,
        "layoutID": "RadDockLayout1",
        "uniqueName": "RadDockZone1"
    }, null, null, $get("RadDockZone1"));
    $create(Telerik.Web.UI.RadDock, {
        "allowedZones": [],
        "clientStateFieldID": "HomepagecontentControl_ClientState",
        "dockMode": 2,
        "dockZoneID": "RadDockZone1",
        "forbiddenZones": [],
        "layoutID": "RadDockLayout1",
        "skin": "Default",
        "title": "HomepagecontentControl(1000* 450 ) Left",
        "uniqueID": "HomepagecontentControl",
        "uniqueName": "HomepagecontentControl",
        "width": ""
    }, null, {
        "dockZone": "RadDockZone1"
    }, $get("HomepagecontentControl"));
});
Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadDockZone, {
        "clientID": "RadDockZone3",
        "clientStateFieldID": "RadDockZone3_ClientState",
        "fitDocks": false,
        "layoutID": "RadDockLayout1",
        "uniqueName": "RadDockZone3"
    }, null, null, $get("RadDockZone3"));
});
//]]>
<!-- </script> -->
<!-- </form> -->
<!-- </center> -->
<!-- </body> -->
<script language="javascript" type="text/javascript">

//     (function() {

//         fn();
//     }
//     );
//     try {
//         window.onload = pageloadurl();
//     } catch (e) {}
//     var t;
//     var p;
//     function fnSet() {
//         try {
//             var str = window.dialogArguments;
//             oHomePage.setHomePage(str);
//             var divmain = document.getElementById("Iehomepage1_divmain1");
//             divmain.style.display = 'none';
//             return false;
//         } catch (e) {}
//     }
//     function timeout() {
//         try {
//             var obj = $get('VerticalMenuControl');
//             var obj1 = $get('VerticalMenuControl_C');

//             obj.style.height = $get('HomepagecontentControl').offsetHeight + "px";
//             obj1.style.height = $get('HomepagecontentControl').offsetHeight + "px";
//             clearTimeout(t);
//             clearTimeout(p);
//             var url = "http://" + window.location.host + "/";

//             var aa = oHomePage.isHomePage(url);

//             var divmain = document.getElementById("Iehomepage1_divmain1");
//             if (divmain != null) {
//                 if (aa == true) {
//                     divmain.style.display = 'none';
//                 } else {
//                     divmain.style.display = 'block';
//                 }
//             }

//             return false;
//         } catch (e) {}
//     }

// function pageloadurl() {
//     try {
//         try {
//         }
//         catch (e) {}
//         if (self != top) {
//             top.location = self.location;

//         }
//         try {
//         //document.addEventListener('DOMContentLoaded', fn, false);  
//         } catch (e) {
//         }

//         p = window.setTimeout(fn, 600);

//         t = setTimeout("timeout()", 6000);

//     } catch (e) {
//     }
// }

// function fn() {
//     try {

//         var obj = $get('VerticalMenuControl');
//         var obj1 = $get('VerticalMenuControl_C');
//         if (obj != null) {

//             var obj2 = $get('HomepagecontentControl');

//             obj.style.height = obj2.offsetHeight + "px";
//             obj1.style.height = obj2.offsetHeight + "px";
//             clearTimeout(p);
//         }
//     } catch (e) {
//     }
// }
//   function test()
//  {var divmain= document.getElementById("ctl00_Iehomepage1_divmain1"); 
//    divmain.style.display='none';
//     alert(divmain);
//       setTimeout("timeout()",10000);
//       } 