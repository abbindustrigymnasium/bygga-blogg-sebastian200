---
title: Wäxterås fake
description: Wäxterås, Abbgymnasiet, A Web-Controlled Greenhouse Project
img: https://th.bing.com/th/id/OIG.VuccyhtKszCSAjc1PEwL?w=270&h=270&c=6&r=0&o=5&dpr=1.1&pid=ImgGn
---

# Wäxterås, Abbgymnasiet: A Web-Controlled Greenhouse Project

In this post, I will share with you one of my recent projects that I am very proud of. It is a greenhouse project that uses motors to control the temperature, humidity and light conditions inside the greenhouse. The best part is that the motors can be controlled remotely via a web interface that I built using Vue 3 and Quasar.

## The Problem

The project was initiated by Abbgymnasiet, a high school in Sweden that wanted to create a greenhouse for their students to learn about plants and sustainability. They wanted the greenhouse to be automated and adjustable, so that the students can experiment with different environmental settings and observe how they affect the plant growth.

However, they faced some challenges in finding a suitable solution. They needed a system that was:

- Affordable and easy to install
- Reliable and durable
- Flexible and customizable
- User-friendly and accessible

## The Solution

That's where I came in. I proposed to design and build a system that would meet all their requirements using some simple hardware and software components.

The hardware components consisted of:

- A Raspberry Pi 4 as the main controller
- A DHT22 sensor to measure the temperature and humidity inside the greenhouse
- A LDR sensor to measure the light intensity inside the greenhouse
- Four DC motors to control the opening and closing of the windows and the roof of the greenhouse
- Four relays to switch the motors on and off
- Some wires, resistors, capacitors and breadboards to connect everything together

The software components consisted of:

- A Python script running on the Raspberry Pi that reads the sensor data and controls the motors using GPIO pins
- A Flask server running on the Raspberry Pi that exposes a REST API for communicating with the web interface
- A Vue 3 app running on the web browser that displays the sensor data and allows the user to control the motors using Quasar components

## The Result

The result was a fully functional web-controlled greenhouse system that satisfied all the needs of Abbgymnasiet. The system was:

- Affordable and easy to install: The total cost of the hardware components was less than $100, and the installation process took less than an hour.
- Reliable and durable: The system has been running smoothly for over six months without any major issues or failures.
- Flexible and customizable: The system can be easily modified or extended by changing the Python script or the Vue app according to different needs or preferences.
- User-friendly and accessible: The system can be accessed from any device with a web browser, such as a laptop, tablet or smartphone.

Here are some screenshots of the web interface:

## The Conclusion

I hope you enjoyed reading about my project and learned something from it. I think this project demonstrates how powerful and versatile web development can be, especially when combined with hardware devices. I also think this project shows how web development can be used for social good, by creating solutions that can benefit education and sustainability.

If you have any questions or feedback about my project, please feel free to contact me at <myemail@example.com>. I would love to hear from you.

Thank you for reading!
