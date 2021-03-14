from imageai.Detection.Custom import CustomObjectDetection
import os


def recognize_custom(image_path, vehicle_type):
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
    detector = CustomObjectDetection()
    detector.setModelTypeAsYOLOv3()
    detector.setModelPath(folder_path + model_name)
    detector.setJsonPath(folder_path + json_name)
    detector.loadModel()
    detector = detector.detectObjectsFromImage(input_image=image_path,
                                               output_image_path=image_path,
                                               minimum_percentage_probability=20)
