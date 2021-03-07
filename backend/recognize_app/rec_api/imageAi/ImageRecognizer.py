from imageai.Detection.Custom import CustomObjectDetection
from cloudinary.models import CloudinaryField


def recognize_custom(image_path):
    detector = CustomObjectDetection()
    detector.setModelTypeAsYOLOv3()
    detector.setModelPath("detection_model-ex-026--loss-0013.412.h5")
    detector.setJsonPath("detection_config.json")
    detector.loadModel()
    detector.detectObjectsFromImage(input_image=image_path,
                                    output_image_path=CloudinaryField('image',
                                                                      format='jpg',
                                                                      folder='diplomawork',
                                                                      default='https://res.cloudinary.com/ddmivk4av/image/upload/v1615040123/diplomawork/not_found.jpg'),
                                    minimum_percentage_probability=20)
