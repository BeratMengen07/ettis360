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
            "src": "ettis5_controls.js"
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
	                "duration": 1.28,
	                "frames": 32,
	                "height": 64,
	                "width": 64
	            },
	            "bitmap": "pap_rings.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "ettis4.js",
	            "opacity": "1.00;1.00",
	            "position": "170.0630,10.6373",
	            "target": "myself",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 25px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Pos4"
	            },
	            "transition": "blend,2",
	            "unit": "deg"
	        }
	    ],
	"hotspots": {
	        "visible": true
	    },
	"id": "ettis5",
	"image":{"baseindex":1,"bitmap":[{"back":{"src":"ettis5_tiles/ettis5_t_1b_%y_%x.jpg"},"down":{"src":"ettis5_tiles/ettis5_t_1d_%y_%x.jpg"},"front":{"src":"ettis5_tiles/ettis5_t_1f_%y_%x.jpg"},"height":3436,"left":{"src":"ettis5_tiles/ettis5_t_1l_%y_%x.jpg"},"right":{"src":"ettis5_tiles/ettis5_t_1r_%y_%x.jpg"},"tilesize":480,"up":{"src":"ettis5_tiles/ettis5_t_1u_%y_%x.jpg"},"width":3436},{"back":{"src":"ettis5_tiles/ettis5_t_2b_%y_%x.jpg"},"down":{"src":"ettis5_tiles/ettis5_t_2d_%y_%x.jpg"},"front":{"src":"ettis5_tiles/ettis5_t_2f_%y_%x.jpg"},"height":1718,"left":{"src":"ettis5_tiles/ettis5_t_2l_%y_%x.jpg"},"right":{"src":"ettis5_tiles/ettis5_t_2r_%y_%x.jpg"},"tilesize":480,"up":{"src":"ettis5_tiles/ettis5_t_2u_%y_%x.jpg"},"width":1718},{"back":{"src":"ettis5_tiles/ettis5_t_3b_%y_%x.jpg"},"down":{"src":"ettis5_tiles/ettis5_t_3d_%y_%x.jpg"},"front":{"src":"ettis5_tiles/ettis5_t_3f_%y_%x.jpg"},"height":859,"left":{"src":"ettis5_tiles/ettis5_t_3l_%y_%x.jpg"},"right":{"src":"ettis5_tiles/ettis5_t_3r_%y_%x.jpg"},"tilesize":480,"up":{"src":"ettis5_tiles/ettis5_t_3u_%y_%x.jpg"},"width":859},{"back":{"src":"ettis5_tiles/ettis5_t_4b_%y_%x.jpg"},"down":{"src":"ettis5_tiles/ettis5_t_4d_%y_%x.jpg"},"front":{"src":"ettis5_tiles/ettis5_t_4f_%y_%x.jpg"},"height":430,"left":{"src":"ettis5_tiles/ettis5_t_4l_%y_%x.jpg"},"right":{"src":"ettis5_tiles/ettis5_t_4r_%y_%x.jpg"},"tilesize":480,"up":{"src":"ettis5_tiles/ettis5_t_4u_%y_%x.jpg"},"width":430}],"multilevel":true,"preview":{"src":"ettis5_tiles/ettis5_preview.jpg"},"projection":"cubic"},
	"textbox": [
	        {
	            "align": "top",
	            "style": " color:#ffffff; font-family: Arial,Helvetica,sans-serif; text-shadow: 0px 0px 3.8px #000000, 0px 0px 2.5px #000000, 0px 0px 1.7px #000000; font-size: 25px; font-weight: bold; text-align:center;",
	            "text": "Ettis Gym Body & Fitnessworld",
	            "yoff": "4px"
	        }
	    ],
	"view": {
	        "hfov": 100,
	        "pan": 115.66,
	        "shortdescription": "Pos5",
	        "tilt": 16.33
	    }
},
"version": "4.1"
}
}