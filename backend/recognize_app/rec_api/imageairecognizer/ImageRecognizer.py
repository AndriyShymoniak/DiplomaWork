from imageai.Detection.Custom import CustomObjectDetection
import os


def recognize_custom(image_path):
    folder_path = str(os.getcwd()) + "\\recognize_app\\rec_api\\imageairecognizer\\"
    detector = CustomObjectDetection()
    detector.setModelTypeAsYOLOv3()
    detector.setModelPath(folder_path + "tank_model_3_loss-0008.h5")
    detector.setJsonPath(folder_path + "detection_config.json")
    detector.loadModel()
    detector = detector.detectObjectsFromImage(input_image=image_path,
                                               output_image_path=image_path,
                                               minimum_percentage_probability=20)
