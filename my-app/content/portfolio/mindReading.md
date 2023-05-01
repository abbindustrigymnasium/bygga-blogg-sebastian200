---
title: mindreading
description: How I Built a Mind-Reading Device with Python and EEG
img: https://th.bing.com/th/id/OIG.XtX.R453SV8Cv4CVE4ud?w=270&h=270&c=6&r=0&o=5&dpr=1.1&pid=ImgGn
---

# How I Built a Mind-Reading Device with Python and EEG

Have you ever wanted to know what someone else is thinking? In this post, I will show you how I built a mind-reading device with Python and EEG, and how you can do it too.

The Idea
The idea of building a mind-reading device came to me when I was watching X-Men for the 10th time. I was fascinated by the character of Professor X, who can read and manipulate the minds of others using his telepathy. I wondered if it was possible to create a device that could measure and decode the brain activity of someone and translate it into words or images. I did some research and found out that there are some technologies that can do that, such as electroencephalography (EEG), which is a method of recording the electrical signals of the brain using electrodes attached to the scalp.

The Tools
To build a mind-reading device, I needed two things: an EEG headset and a programming language. For the EEG headset, I used Emotiv’s EPOC+, which is a wireless device that has 14 electrodes and can measure various brain waves, such as alpha, beta, gamma, delta and theta. For the programming language, I used Python, which is my favorite language and has many libraries and modules for EEG analysis.

The Code
The code for this project is available on my GitHub repo. You can also view my Jupyter Notebook where I explain each step in detail and show some examples of mind reading.

The code works as follows:

First, I import the necessary libraries and modules, such as Emotiv’s Cortex API, NumPy, SciPy and Matplotlib.
Next, I connect to the EEG headset using Emotiv’s Cortex API. I specify the client ID, client secret and license key that I obtained from Emotiv’s website. I also specify the headset ID and the profile name that I created using Emotiv’s app.
Then, I subscribe to the raw EEG data stream using Emotiv’s Cortex API. I specify the stream name as “eeg” and the data type as “float”. I also define a callback function that receives the data from the headset and stores it in a list.
After that, I ask the user to think of a word or an image and press enter. I record the EEG data for 10 seconds while the user is thinking. I also print a message to indicate when the recording starts and ends.
Lastly, I process the EEG data using NumPy and SciPy. I apply a bandpass filter to remove the noise and extract the frequency bands of interest. I calculate the power spectrum of each frequency band using SciPy’s periodogram function. I plot the power spectrum using Matplotlib’s plot function. I also use Emotiv’s Cortex API to get the facial expression and mental command of the user based on their EEG data.
The Results
The results are amazing. Depending on what the user is thinking, I can see different patterns in their power spectrum. For example, if they are thinking of a word, I can see more activity in the alpha band (8-12 Hz), which is associated with language processing. If they are thinking of an image, I can see more activity in the gamma band (30-100 Hz), which is associated with visual perception. I can also see their facial expression and mental command based on their EEG data. For example, if they are smiling or frowning, or if they are trying to push or pull something with their mind.

The Conclusion
In this post, I showed you how I built a mind-reading device with Python and EEG. I used Emotiv’s EPOC+ headset to measure
