PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"key": "036900103608",
"audio": {
        "autoplay": true,
        "id": "gAudio",
        "loop": false,
        "src": "Hintergrundmusik 1.MP3"
    },
"control": {
        "enablevrcontroller": true,
        "mousemode": "drag",
        "touchmode": "drag",
        "vrdisplay": "auto"
    },
"data": {
        "id": "globalData",
        "infoTextBox": {
            "align": "center",
            "captureMouse": true,
            "checkHover": true,
            "id": "infobox",
            "maxwidth": "66%",
            "onclick": "function(){ this.viewer.action('hideMessage'); } ",
            "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#000; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 400; text-align:left; border-radius: 3px; border: rgba(0,0,0,0.66) solid 1px; box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.66);background: rgba(255,255,255,0.75);",
            "text": "<div style='padding: 16px;'><img src=\"info_ettis.jpg\"><br><br><center><FONT SIZE=\"2\">Panoramic photography  by  CONCEPT SUCCESS PROMOTION, Wolf Dieter Magerl<br><center><a href=\"https://www.flytosuccess.at\">www.erfolg-erfolgt.com</a></center></div>",
            "xoff": 0,
            "yoff": -30
        },
        "messageBoxStyle": "min-width: 25%; text-shadow: none; line-height: 100%; color:#000; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 400; text-align:left; border-radius: 3px; border: rgba(0,0,0,0.66) solid 1px; box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.66);background: rgba(255,255,255,0.75);"
    },
"include": [
        {
            "src": "ettis3_controls.js"
        },
        {
            "src": "panoStudioViewerGallery.js"
        }
    ],
"logo": {
        "href": "https://www.flytosuccess.at",
        "src": "CSP Logo 360 klein.png",
        "style": "max-width: 80%;",
        "target": "_blank"
    },
"node": {
	"autoplay": {
	        "pan": 2,
	        "restart": 5,
	        "status": "on",
	        "tilt": 0,
	        "zoom": 1
	    },
	"camera": {
	        "maxpan": 360,
	        "maxtilt": 90,
	        "minpan": 0,
	        "mintilt": -90
	    },
	"hotspot": [
	        {
	            "animation": {
	                "duration": 1.0667,
	                "frames": 32,
	                "height": 84,
	                "width": 204
	            },
	            "bitmap": "pap_perspectiveArrow2x.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "ettis2.js",
	            "opacity": "1.00;1.00",
	            "position": "185.2359,17.7718",
	            "target": "myself",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 25px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Pos2"
	            },
	            "transition": "blend,2",
	            "unit": "deg"
	        }
	    ],
	"hotspots": {
	        "visible": true
	    },
	"id": "ettis3",
	"image":{"baseindex":1,"bitmap":[{"back":{"src":"ettis3_tiles/ettis3_t_1b_%y_%x.jpg"},"down":{"src":"ettis3_tiles/ettis3_t_1d_%y_%x.jpg"},"front":{"src":"ettis3_tiles/ettis3_t_1f_%y_%x.jpg"},"height":3414,"left":{"src":"ettis3_tiles/ettis3_t_1l_%y_%x.jpg"},"right":{"src":"ettis3_tiles/ettis3_t_1r_%y_%x.jpg"},"tilesize":480,"up":{"src":"ettis3_tiles/ettis3_t_1u_%y_%x.jpg"},"width":3414},{"back":{"src":"ettis3_tiles/ettis3_t_2b_%y_%x.jpg"},"down":{"src":"ettis3_tiles/ettis3_t_2d_%y_%x.jpg"},"front":{"src":"ettis3_tiles/ettis3_t_2f_%y_%x.jpg"},"height":1707,"left":{"src":"ettis3_tiles/ettis3_t_2l_%y_%x.jpg"},"right":{"src":"ettis3_tiles/ettis3_t_2r_%y_%x.jpg"},"tilesize":480,"up":{"src":"ettis3_tiles/ettis3_t_2u_%y_%x.jpg"},"width":1707},{"back":{"src":"ettis3_tiles/ettis3_t_3b_%y_%x.jpg"},"down":{"src":"ettis3_tiles/ettis3_t_3d_%y_%x.jpg"},"front":{"src":"ettis3_tiles/ettis3_t_3f_%y_%x.jpg"},"height":854,"left":{"src":"ettis3_tiles/ettis3_t_3l_%y_%x.jpg"},"right":{"src":"ettis3_tiles/ettis3_t_3r_%y_%x.jpg"},"tilesize":480,"up":{"src":"ettis3_tiles/ettis3_t_3u_%y_%x.jpg"},"width":854},{"back":{"src":"ettis3_tiles/ettis3_t_4b_%y_%x.jpg"},"down":{"src":"ettis3_tiles/ettis3_t_4d_%y_%x.jpg"},"front":{"src":"ettis3_tiles/ettis3_t_4f_%y_%x.jpg"},"height":427,"left":{"src":"ettis3_tiles/ettis3_t_4l_%y_%x.jpg"},"right":{"src":"ettis3_tiles/ettis3_t_4r_%y_%x.jpg"},"tilesize":480,"up":{"src":"ettis3_tiles/ettis3_t_4u_%y_%x.jpg"},"width":427}],"multilevel":true,"preview":{"src":"ettis3_tiles/ettis3_preview.jpg"},"projection":"cubic"},
	"textbox": [
	        {
	            "align": "top",
	            "style": " color:#ffffff; font-family: Arial,Helvetica,sans-serif; text-shadow: 0px 0px 3.8px #000000, 0px 0px 2.5px #000000, 0px 0px 1.7px #000000; font-size: 25px; font-weight: bold; text-align:center;",
	            "text": "Ettis Gym Body & Fitnessworld",
	            "yoff": "4px"
	        }
	    ],
	"view": {
	        "hfov": 90,
	        "pan": 219.33,
	        "shortdescription": "Pos3",
	        "tilt": 7.72
	    }
},
"version": "4.1"
}
}