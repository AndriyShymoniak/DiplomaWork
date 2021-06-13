from imageai.Detection.Custom import CustomObjectDetection
from imageai.Detection.Custom import CustomVideoObjectDetection
import os
from pathlib import Path

class ImageRecognizerCls:
    def recognize_custom(image_path, vehicle_type, isVideo):
        if vehicle_type == 'TANK':
            model_name = 'tank_model_3_loss-0008.h5'
            json_name = 'tank_detection_config.json'
        elif vehicle_type == 'APC':
            model_name = 'apc_model_6_loss-0012.h5'
            json_name = 'apc_detection_config.json'
        elif vehicle_type == 'SHIP':
            print('3')
        elif vehicle_type == 'AERO':
            print('4')
        folder_path = str(os.getcwd()) + "\\recognize_app\\rec_api\\imageairecognizer\\"

        if isVideo == False:
            detector = CustomObjectDetection()
            detector.setModelTypeAsYOLOv3()
            detector.setModelPath(folder_path + model_name)
            detector.setJsonPath(folder_path + json_name)
            detector.loadModel()
            detector = detector.detectObjectsFromImage(input_image=image_path,
                                                       output_image_path=image_path,
                                                       minimum_percentage_probability=30)

        else:
            video_detector = CustomVideoObjectDetection()
            video_detector.setModelTypeAsYOLOv3()
            video_detector.setModelPath(folder_path + model_name)
            video_detector.setJsonPath(folder_path + json_name)
            video_detector.loadModel()
            print(Path(image_path).stem)
            video_detector = video_detector.detectObjectsFromVideo(
                input_file_path=image_path,
                output_file_path=image_path,
                minimum_percentage_probability=30,
                frames_per_second=30, log_progress=True)

            os.remove(image_path)
            p = Path(video_detector)
            FILE_NAME=p.with_suffix('').with_suffix('').name
            os.popen("ffmpeg -i {input} -ac 2 -b:v 2000k -c:a aac -c:v libx264 -b:a 160k -vprofile high -bf 0 -strict experimental -f mp4 {output}.mp4".format(
                    input=p, output='.\media\{0}'.format(FILE_NAME))).close()
            # os.remove(video_detector)
