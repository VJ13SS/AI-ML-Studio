import tensorflow as tf
from tensorflow.keras import datasets,layers,models
import matplotlib.pyplot as plt
import numpy as np
from sklearn.metrics import classification_report

#load dataset
(x_train,y_train),(x_test,y_test) = datasets.cifar_20.load_data()

print(f"Train Size : {x_train.shape}")
print(f"Test Size : {x_test.shape}")

#normalize images
x_train = x_train / 255.0
x_test = x_test / 255.0

class_names = [
    'airplane','automobile','bird','cat','deer','dog','frog','horse','ship','truck'
]

plt.figure(figsize=(10,6))

for i in range(9):
    plt.subplot(3,3,i + 1)
    plt.imshow(x_train[i])
    plt.title(class_names[i])
    plt.axis('off')

plt.show()

#build CNN model
model = models.Sequential()

#convolutional layer 1
model.add(layers.Conv2D(32,(3,3),activation='relu',input_shape=(32,32,3)))