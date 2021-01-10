(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{375:function(e,t,a){"use strict";a.r(t);var n=a(42),A=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"object-tracking-based-on-deep-learning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-tracking-based-on-deep-learning"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Object Tracking based on Deep Learning")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.ibb.co/0JXbPjm/Capture.png",alt:"Fig1"}})]),e._v(" "),a("h2",{attrs:{id:"what-is-video-tracking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-video-tracking"}},[e._v("#")]),e._v(" What is Video tracking?")]),e._v(" "),a("p",[e._v("Target tracking is the process of locating moving targets in a video camera for a very wide range of real-world applications. Real-time target tracking is an important task for many computer vision applications, such as surveillance, perception-based user interfaces, augmented reality, object-based video compression and autonomous driving.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.ibb.co/KymdPrW/2.png",alt:"Fig2"}})]),e._v(" "),a("p",[e._v("Historically, there are many ways to track video targets: when you track all moving objects, the difference between the images becomes useful; for tracking the moving hand in the video, the average shift method based on skin color is the best solution; Model matching is a good technique for tracking an aspect of an object.")]),e._v(" "),a("p",[e._v("Since the results of the "),a("a",{attrs:{href:"http://www.image-net.org/challenges/LSVRC/2012/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ImageNet 2012 challenge"),a("OutboundLink")],1),e._v(", Deep Learning (and in particular, Convolutional Neural Networks (CNNs)) has become the main method for solving this kind of problem. Object tracking studies have therefore naturally integrated recognition models, which has made it possible to create tracking algorithms.")]),e._v(" "),a("p",[e._v("For more details, you can look at the following projects and tutorials related to the video track challenge:")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://cv-tricks.com/object-tracking/quick-guide-mdnet-goturn-rolo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zero to Hero: A Quick Guide to Object Tracking: MDNET, GOTURN, ROLO\n"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.move-lab.com/blog/tracking-things-in-object-detection-videos",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRACKING THINGS IN OBJECT DETECTION VIDEOS\n"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://medium.com/@manivannan_data/multiple-object-tracking-algorithms-a01973272e52",target:"_blank",rel:"noopener noreferrer"}},[e._v("Multiple Object Tracking Algorithms\n"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/OlafenwaMoses/ImageAI/blob/master/imageai/Detection/VIDEO.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ImageAI : Video Object Detection, Tracking and Analysis"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/DrewNF/Tensorflow_Object_Tracking_Video",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tensorflow Object Tracking Video"),a("OutboundLink")],1)])])]),e._v(" "),a("p",[e._v("Practical books that will allow you to learn the different aspects of video tracking:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.amazon.com/Video-Tracking-Practice-Emilio-Maggio/dp/0470749644",target:"_blank",rel:"noopener noreferrer"}},[e._v("Video Tracking: Theory and Practice 1st Edition"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.amazon.com/Video-object-Tracking-Image-Processing/dp/3844386238",target:"_blank",rel:"noopener noreferrer"}},[e._v("Video object Tracking: Image Processing and Tracking Paperback – July 16, 2011"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"conventional-methods-for-object-detection-and-tracking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conventional-methods-for-object-detection-and-tracking"}},[e._v("#")]),e._v(" Conventional methods for object detection and tracking")]),e._v(" "),a("p",[a("strong",[e._v("1. Basic object detection")])]),e._v(" "),a("p",[e._v('To make a baseline movement detection, given the difference between the "background" and the other frames, this method is still quite good, but you must first define the background frame, if it is outside, changes in lighting can cause a false detection. Therefore, this method is very limited.\nOpenCV offers a class, called BackgroundSubtractor, which is useful for splitting the foreground from the background. There are three background separators in OpenCV3: '),a("em",[e._v("K-Nearest (KNN)")]),e._v(",* Gaussian Mixture (MOG2)*, and "),a("em",[e._v("Geometric Multigid (GMG)")]),e._v(". The BackgroundSubtractor class used for video analysis, i.e. the BackgroundSubtractor class "),a("em",[e._v("learns")]),e._v(" the context of each image. The BackgroundSubtractor class is often used to compare different frames as well as to record previous frames, which can be used to improve the results of motion analysis.\n"),a("img",{attrs:{src:"https://www.researchgate.net/profile/Venkatesh_Saligrama/publication/224396654/figure/download/fig1/AS:393809457369095@1470902899537/Background-subtraction-results-for-synthetic-objects-moving-against-quasi-static.png",alt:"Img3"}})]),e._v(" "),a("p",[a("strong",[e._v("2. Background splitter by MOG2")])]),e._v(" "),a("p",[e._v("One of the basic features of the BackgroundSubtractor class is that it can compute shadows. This is absolutely essential for accurate playback of video images: by detecting shadows, it is possible to exclude shadow areas from the detected image (in threshold mode) so that real attributes can be focused.\n"),a("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmEAAAGLCAYAAACPwkUyAAAgAElEQVR4Ae3dC5acOLYF0PLrGph7ZLZH1u6R5YtbXdclk0DwEUjAzrWyIgKEPltUcixw+ssff/zx8fr2RYAAAQIECBAgcKLA/53YlqYIECBAgAABAgT+FhDCnAoECBAgQIAAgQYCQlgDdE0SIECAAAECBIQw5wABAgQIECBAoIGAENYAXZMECBAgQIAAASHMOUCAAAECBAgQaCAghDVA1yQBAgQIECBAQAhzDhAgQIAAAQIEGggIYQ3QNUmAAAECBAgQEMKcAwQIECBAgACBBgJCWAN0TRIgQIAAAQIEhDDnAAECBAgQIECggYAQ1gBdkwQIECBAgMB1BT4+Pqp0/surljo1VemOSggQIECAAAECzxCwEvaMeTZKAgQIECBAoDMBIayzCdEdAgQIECBA4BkCQtgz5tkoCRAgQIAAgc4EhLDOJkR3CBAgQIAAgWcICGHPmGejJECAAAECBDoTEMI6mxDdIUCAAAECBJ4hIIQ9Y56NkgABAgQIEOhMQAjrbEJ0hwABAgQIEHiGgBD2jHk2SgIECBAgQKAzASGsswnRHQIECBAgQOAZAkLYM+bZKAkQIECAAIHOBISwziZEdwgQIECAAIFnCAhhz5hnoyRAgAABAgQ6ExDCOpsQ3SFAgAABAgSeISCEPWOejZIAAQIECBDoTEAI62xCdIcAAQIECBB4hoAQ9ox5NkoCBAgQIECgMwEhrLMJ0R0CBAgQIEDgGQJC2DPm2SgJECBAgACBzgSEsM4mRHcIECBAgACBZwgIYc+YZ6MkQIAAAQIEOhMQwjqbEN0hQIAAAQIEniEghD1jno2SAAECBAgQ6ExACOtsQnSHAAECBAgQeIaAEPaMeTZKAgQIECBAoDMBIayzCdEdAgQIECBA4BkCQtgz5tkoCRAgQIAAgc4EhLDOJkR3CBAgQIAAgWcICGHPmGejJECAAAECBDoTEMI6mxDdIUCAAAECBJ4hIIQ9Y56NkgABAgQIEOhMQAjrbEJ0hwABAgQIEHiGgBD2jHk2SgIECBAgQKAzASGsswnRHQIECBAgQOAZAkLYM+bZKAkQIECAAIHOBISwziZEdwgQIECAAIFnCAhhz5hnoyRAgAABAgQ6ExDCOpsQ3SFAgAABAgSeISCEPWOejZIAAQIECBDoTEAI62xCdIcAAQIECBB4hoAQ9ox5NkoCBAgQIECgMwEhrLMJ0R0CBAgQIEDgGQJC2DPm2SgJECBAgACBzgSEsM4mRHcIECBAgACBZwgIYc+YZ6MkQIAAAQIEOhMQwjqbEN0hQIAAAQIEniEghD1jno2SAAECBAgQ6ExACOtsQnSHAAECBAgQeIaAEPaMeTZKAgQIECBAoDMBIayzCdEdAgQIECBAYF7g4+NjvsBF9n559fMeI7kIuG4SIECAAAECBELASpjzgAABAgQIECDQQEAIa4CuSQIECBAgQICAEOYcIECAAAECBAg0EBDCGqBrkgABAgQIECAghDkHCBAgQIAAAQINBISwBuiaJECAAAECBAgIYc4BAgQIECBAgEADASGsAbomCRAgQIAAAQJCmHOAAAECBAgQINBAQAhrgK5JAgQIECBAgIAQ5hwgQIAAAQIECDQQEMIaoGuSAAECBAgQICCEOQcIECBAgAABAg0EhLAG6JokQIAAAQIECAhhzgECBAgQIECAQAMBIawBuiYJECBAgAABAkKYc4AAAQIECBAg0EBACGuArkkCBAgQIECAgBDmHCBAgAABAgQINBAQwhqga5IAAQIECBAgIIQ5BwgQIECAAAECDQSEsAbomiRAgAABAgQICGHOAQIECBAgQIBAAwEhrAG6JgkQIECAAAECQphzgAABAgQIECDQQEAIa4CuSQIECBAgQICAEOYcIECAAAECBAg0EBDCGqBrkgABAgQIECAghDkHCBAgQIAAAQINBISwBuiaJECAAAECBAgIYc4BAgQIECBAgEADASGsAbomCRAgQIAAAQJCmHOAAAECBAgQINBAQAhrgK5JAgQIECBAgIAQ5hwgQIAAAQIECDQQEMIaoGuSAAECBAgQICCEOQcIECBAgAABAg0EhLAG6JokQIAAAQIECAhhzgECBAgQIECAwMkC379//0MIOxldcwQIECBAgACBEPgTAwECBAgQIECAwDkCsQKWX0JYSnglQIAAAQIECBwkUIavaOLbt29uRx5krVoCBAgQIECAwF8CYwHsx48fbkc6PwgQIECAAAECRwl8fHx8qjoCWHx5MP8TjQ0ECBAgQIAAgf0CcwEsavdM2H5jNRAgQIAAAQIEfgkMbz/mjlwBi89RRghLGa8ECBAgQIAAgZ0CEa7iofv8KoNXbIv9+eV2ZEp4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",alt:"image.png"}})]),e._v(" "),a("p",[a("strong",[e._v("3. Background splitter by KNN")])]),e._v(" "),a("p",[e._v("The images can be viewed from left to right: detected moving targets, background segmentation, thresholding after background segmentation.\n"),a("img",{attrs:{src:"https://www.ccoderun.ca/programming/doxygen/opencv/Background_Subtraction_Tutorial_Scheme.png",alt:"Fig5"}})]),e._v(" "),a("p",[a("strong",[e._v("4. Kalman object tracking")])]),e._v(" "),a("p",[e._v("Kalman is a Hungarian mathematician, who developed a filter from his PhD thesis work and the 1960 "),a("a",{attrs:{href:"https://asmedigitalcollection.asme.org/fluidsengineering/article/82/1/35/397706/A-New-Approach-to-Linear-Filtering-and-Prediction",target:"_blank",rel:"noopener noreferrer"}},[e._v("paper"),a("OutboundLink")],1),e._v(' entitled "A New Approach to Linear Filtering and Prediction Problems".')]),e._v(" "),a("p",[e._v("Kalman filtering has been applied in many domains, particularly in the navigation guidance of aircraft and missiles.\nThe Kalman filter works repeatedly on a noisy input data stream (such as a video input in computer vision) and produces a statistically optimal estimate of the state of the underlying system (such as the position in the video).")]),e._v(" "),a("p",[e._v("The Kalman filter algorithm is divided into two phases:")]),e._v(" "),a("ul",[a("li",[e._v("Prediction phase: the Kalman filter uses the covariance computed from the current position to estimate the target's new position.")]),e._v(" "),a("li",[e._v("Update phase: the Kalman filter stores the target position and calculates the corrected covariance for the next iteration.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.stack.imgur.com/zS2OB.png",alt:"Fig5"}})]),e._v(" "),a("h2",{attrs:{id:"deep-learning-based-methods-for-object-detection-and-tracking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deep-learning-based-methods-for-object-detection-and-tracking"}},[e._v("#")]),e._v(" Deep Learning based methods for object detection and tracking")]),e._v(" "),a("p",[e._v("In recent years, Deep Learning methods have been successfully applied in the field of object tracking and are gradually exceeding traditional performance methods. In this section, we will present current target tracking algorithms based on Deep Learning.")]),e._v(" "),a("p",[a("strong",[e._v("1. Trends in object tracking")])]),e._v(" "),a("p",[e._v("Unlike the trend towards of Deep Learning in the visual domain, such as detection and recognition, the application of this paradigm in the object tracking domain is not seamless. The main problem is the lack of learning data: one of the complications of the deep model comes from the effective learning of a large number of labelled learning data, while target tracking only provides the context for selecting the first image as learning data. In this case, it is difficult to train a deep model from scratch at the beginning of the tracking. Currently, the target tracking algorithm based on Deep Learning takes several ideas to solve this problem, including the following and finally the recurrent neural network in the current tracking field to solve the target tracking problem. Where training data for target tracking is very limited, complementary non-supervised training data is used for pre-training to achieve a high-level feature epresentation of object, and in actual tracking, using the limited sample information from the current tracking target. The accuracy of the pre-training model confers a higher classification performance on the model for the current tracking goal, which significantly reduces the need to track target training samples and improves the performance of the tracking algorithm.")]),e._v(" "),a("p",[a("strong",[e._v("2. Overall multi-target tracking process")])]),e._v(" "),a("p",[e._v("In order to track a target, first this target is detected. This step is called "),a("em",[e._v("target detection")]),e._v(", then the target in each image is mapped based on the detection result. Today, there are multi-target detectors, such as "),a("a",{attrs:{href:"https://arxiv.org/abs/1512.02325",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSD"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://arxiv.org/abs/1506.02640",target:"_blank",rel:"noopener noreferrer"}},[e._v("YOLO"),a("OutboundLink")],1),e._v(", etc.")]),e._v(" "),a("p",[a("strong",[e._v("3. State-of-the-art methods for object tracking")])]),e._v(" "),a("h5",{attrs:{id:"_3-1-goturn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-goturn"}},[e._v("#")]),e._v(" 3.1.GOTURN")]),e._v(" "),a("p",[e._v("A further great strength of deep learning is the end-to-end learning process. We believe that this opens up a promising future for tracking. Here is an example of the "),a("a",{attrs:{href:"https://www.learnopencv.com/goturn-deep-learning-based-object-tracking/",target:"_blank",rel:"noopener noreferrer"}},[a("em",[e._v("GOTURN")]),e._v(" method"),a("OutboundLink")],1),e._v(". GOTURN's current method has been included in OpenCV 3.2.0 development version.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.learnopencv.com/wp-content/uploads/2018/07/goturn-inputs-ouputs-1024x487.jpg",alt:"Fig6"}}),e._v("\nGOTURN involves a convolution network based on the input of a pair of images using the ALOV300+ video sequence set and the ImageNet sensing data set, and generates the position change from the previous frame in the detection area to obtain the target's position on the current frame.")]),e._v(" "),a("h5",{attrs:{id:"_3-2-specific-target-tracking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-specific-target-tracking"}},[e._v("#")]),e._v(" 3.2. Specific-target tracking")]),e._v(" "),a("p",[e._v("In practice, a significant aspect of tracking is the tracking of specific objects, such as face tracking, gesture tracking and human tracking. Tracking a particular object is different from the approach described above and relies more on the training of a particular detector. Due to its obvious features, face tracking is mainly implemented through detection task, such as the state-of-the-art Viola-Jones detection model and the current face detection or face point detection model using Deep learning.")]),e._v(" "),a("h5",{attrs:{id:"_3-3-compression-tracking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-compression-tracking"}},[e._v("#")]),e._v(" 3.3. Compression tracking")]),e._v(" "),a("p",[e._v("This approach involves using the compressed detection method to represent feature maps, by achieving dimensional reduction and obtaining small-size cues in order to capture large-size feature space (The block diagram is shown in Figure).\n"),a("img",{attrs:{src:"https://img-blog.csdn.net/20170418162336895?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvd2hmc2h1YWlzaQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:"Fig7"}})]),e._v(" "),a("h2",{attrs:{id:"use-case-motion-tracker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-case-motion-tracker"}},[e._v("#")]),e._v(" Use case: Motion Tracker")]),e._v(" "),a("p",[e._v("Here, we will see how to track the motion of moving objects in the video using OpenCV 3.0 and basic techniques (MOG2). Motion tracking is used to track the motion of objects and then transmit the detected information to an application for further processing.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.ytimg.com/vi/XmI2kE2hUgE/maxresdefault.jpg",alt:"Fig7"}}),e._v(" "),a("strong",[e._v("Basic dependencies:")])]),e._v(" "),a("ul",[a("li",[e._v("OpenCV 3.0;")]),e._v(" "),a("li",[e._v("Numpy lib.")])]),e._v(" "),a("p",[e._v("The tracker implementation is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("%%writefile points.py\nimport numpy as np\nimport numpy.linalg.linalg as la\nimport matplotlib.pyplot as plt\n\nfst = lambda x: x[0]\nsnd = lambda x: x[1]\n\ndistance = lambda p1,p2: la.norm(p1 - p2)\n\nmatchPaths = lambda r, a, paths: [neighborhoodPath(r,paths,ai) for ai in a]\n\nneighborhoodPath = lambda r, paths, pnt: [path for path in paths if distance(path[0],pnt) < r]\n\ndef itemMatcher(choice, items):\n    items = list(sorted(items, key = lambda x: len(x[1])))\n    accumulator = []\n    for index in range(len(items)):\n        (a, bs) = items[index]\n        if bs == []:\n            accumulator.append((a, None))\n        else:\n            b = choice(a,bs)\n            accumulator.append((a, b))\n            for ind in range(len(items)):\n                (a2, bs2) = items[ind]\n                if any(np.array_equal(b,belement) for belement in bs):\n                    bs2 = [belement for belement in bs2 if not np.array_equal(belement, b)]\n                items[ind] = (a2, bs2)\n    return accumulator\n\n\ndef extendPaths(r, paths, scatter, filterWith, noisy = False, discard = True):\n    matches = matchPaths(r,scatter,paths)\n    zipped = zip(scatter, matches)\n    def choice(point, pathOptions): \n        return max(pathOptions,key=len)\n    def combine(tup):\n        (pnt, val) = tup\n        if val == None:\n            if not noisy:\n                return [pnt]\n            else:\n                return []\n        else:\n            return [pnt] + val\n    lst = itemMatcher(choice, zipped)\n    extended_paths = map(snd,lst)\n    if discard:\n       return filter(lambda x: x != [], map(combine,lst))\n    unextended_paths = [p for p in paths if not array_in(p,extended_paths)]  \n    unextended_paths = filter(filterWith, unextended_paths)\n    return ( unextended_paths, filter(lambda x: x!=[], map(combine, lst)) ) # First element is paths to be archived, second element is the extended paths\n   \n\ndef array_in(arr, lst):\n    return any(np.array_equal(arr,elem) for elem in lst)\n\nimport pickle\ndef loaddata(filename):\n    return pickle.load(open(filename))\n\ndef stringPaths(r, scatters):\n    paths = []\n    for sc in scatters:\n        paths = extendPaths(r, paths, sc)\n    return paths\n\ndef plotit(paths):\n    p = [reduce(lambda x,y: np.append(x,y,axis=0),pa) for pa in paths]\n    p = map(lambda x: x.T, p)\n    plt.hold(True)\n    map(lambda x: plt.plot(x[0],x[1],'x'),p)\n\ndef shortcut(r, filename):\n    plotit(stringPaths(r, loaddata(filename)))\ndef rawpoints(filename):\n    scatters = loaddata(filename)\n    plotit(scatters)\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("from __future__ import division\nimport numpy as np\nimport cv2\nimport scipy\nimport pickle\nimport points\n\nfrom sys import argv\n\nOBJ = True\n### THE SETTING PARAMETERS FOR VIDEO.MP4\nif OBJ:\n    KERN_SIZE = 8\n    RADIUS = 20\n    THRESHOLD_AT = 100\n    INPUT_SIZE_THRESHOLD = 75\n    MIN_PATH_SIZE = 10\n    MIN_PATH_STD = 3*RADIUS\n    WRITE_TO_FILE = True\n###END PARAMETERS\nelse:\n    KERN_SIZE = 8\n    RADIUS = 5\n    THRESHOLD_AT = 127\n    INPUT_SIZE_THRESHOLD = 150\n    MIN_PATH_SIZE = 10\n    MINI_PATH_STD = 3*RADIUS\n    WRITE_TO_FILE = True\n\nvideo_output = \"output_tracking.avi\"\n\ndef avgit(y):\n    return x.sum(axis=0)/np.shape(y)[0]\ndef plotp(p,mat,color=0):\n    mat[p[0,1],p[0,0]] = color\n\nif len(argv) != 3:\n    cap = cv2.VideoCapture('vid1.mp4')\nelse:\n    cap = cv2.VideoCapture(argv[1])\n    video_outputfile = argv[2]\nfourcc = cv2.VideoWriter_fourcc(*'XVID')\nret, frame = cap.read()\nheight, width, layers = frame.shape\nvideo_out = cv2.VideoWriter(video_outputfile, fourcc, 30, (width, height), True)\nprint video_out.isOpened()\n\nfgbg = cv2.createBackgroundSubtractorMOG2()\nbwsub= cv2.createBackgroundSubtractorMOG2()\n\nkernlen = KERN_SIZE\nkern = np.ones((kernlen,kernlen))/(kernlen**2)\nddepth = -1\ndef blur(image):\n    return cv2.filter2D(image,ddepth,kern)\ndef blr_thr(image, val=127):\n    return cv2.threshold(blur(image),val,255,cv2.THRESH_BINARY)[1]\ndef normalize(image):\n    s = np.sum(image)\n    if s == 0:\n       return image\n    return height*width* image / s\n#collection = []\npaths = []\narchive = []\n\nr = RADIUS\nthresh_at = THRESHOLD_AT\nTHIS_MUCH_IS_NOISE = INPUT_SIZE_THRESHOLD\n\nwhile(cap.isOpened()):\n    ret, frame = cap.read()\n    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)\n    fgmask = fgbg.apply(frame)\n    mask = blur(fgmask)\n    ret2, mask = cv2.threshold(mask, thresh_at, 255, cv2.THRESH_BINARY)\n    \n    res = cv2.findContours(mask, cv2.RETR_LIST, cv2.CHAIN_APPROX_NONE)\n    cons = res[1]\n    scatter = map(avgit, cons)\n    filterWith = lambda x: len(x) > MIN_PATH_SIZE and np.std(x) > MINIMUM_PATH_STD\n    (toArchive, paths) = points.extendPaths(r, paths, scatter, filterWith, noisy=(len(scatter) > THIS_MUCH_IS_NOISE), discard=False)\n    archive += toArchive\n    img = (1 - mask)*gray\n    for path in archive:\n        #color = 255\n        cv2.polylines(img, np.int32([reduce(lambda x,y: np.append(x,y,axis=0), path)]), 0, (255,0,0))\n    for path in paths:\n        cv2.polylines(img, np.int32([reduce(lambda x,y: np.append(x,y,axis=0), path)]), 1, (0,0,255))\n    cv2.imshow('frame', img)\n    video_out.write(img)\n    if cv2.waitKey(1) & 0xFF == ord('q'):\n        break\ncap.release()\nvideo_out.release()\ncv2.destroyAllWindows()\n\n\nif WRITE_TO_FILE:\n    pickle.dump(archive, open('my_path' + str(np.floor(1000*np.random.rand())) + '.pickle','w'))\n")])])])])}),[],!1,null,null,null);t.default=A.exports}}]);