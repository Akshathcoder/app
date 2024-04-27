# Nutriscan
This GitHub repository will serve as our storage and collaborative site storing all important coding files, data, google documents etc. To keep it simple, the only two tabs we will be using are "Code" and "Issues", the second being used to record current issues and stages that we are working towards. No forks or secondary branches will be made, just push to the main branch.

> *"Your way, your choice."*

## Additional resources
* NutriScan Framework: https://docs.google.com/document/d/1lqhI8h4J4IwmV3UoW0MbuM1CufKXOrIgYmtqgmotIZA/edit
* YTB Discussion Template: https://docs.google.com/document/d/1hNXl018t-9iJ4T4OswwqcqNezfJoSDOw/edit
* YTB Presentation Slides: https://docs.google.com/presentation/d/138CD8pUYUHMlCjTf5m2slOZ3ZZ1DIh0uHFNrDmfUcdM/edit#slide=id.p
* Google Form Survey: https://docs.google.com/forms/d/e/1FAIpQLSfum8YECdKDqieb2lLukl7eRKLjKfdQyshjW6K5yG8HWseYgg/viewform?fbzx=-145462420671854559
* Nutriscan User Interviews: https://docs.google.com/document/d/1gx9HbXAGw2QnzRNApU-yOahF1G9ZNWvYX_ecHWyZ2i4/edit
* Figma: [-0https://www.figma.com/file/UhvlvywhYYsgDrX0VyEBCL/Nutriscan?type=design&node-id=0-1&mode=design&t=cPmIY9U93PKeY5JI
](https://www.figma.com/file/MTVgMdSk6sUimszybwl9tD/Habits-Tracker-App-UI-Kit-(Community)?type=design&node-id=0%3A1&mode=design&t=itfsnjSgrxQmWYO0-1)
## Project Timeline

### 1.1 EMPATHISE: Literature Review / Market Analysis 
Research on scholarly articles, existing solutions, local articles and market gaps. All references will be stored and analysed in (a) Nutriscan Framework google docs and (b) YTB official discussion template.

### 1.1 EMPATHISE: User Surveying
This first step is critical to (a) identify if our target users is indeed the elderly/old adults (b) verify that there is indeed a need for our product. This is the second part of empathising.

Firstly, a survey or poll will be created and sent to a larger group of people, collecting data on the target audience, the number of times they check nutritional labels, whether they view them as important, whether they are confused by them, etc. Data analysis (in R) will then be conducted, identifying sample distribution, target audience, reliability analysis, etc. From this analysis, we can then verify our target users, which is then used for the next step.

The second step would include a more detailed interview of a smaller group of people, preferably people who are the target users identified from the previous step. More qualitative data will then be collected here.

From both forms of user surveying, we can thus verify our need for this solution. The survey will be used to gain the breadth in our surveying, to gain as many perspectives as possible from the entire random sampled population in singapore, whereas the interview aims to gain depth, gaining scope by getting qualitative information from our target audience.

### 2. DEFINE
Once all data from survey, literature review and interviews is collected we will define our problem statement, that is not too broad or too narrow (giving or hinting solutions). It will seek help a certain audience, have a certain benefit, have a certain condition (scope), and a certain degree (metric assessing effectiveness). For degree we can be using a form of test to see if they understand the nutritional label, or to be more full picture if they get a better diet by doing this.

**Current problem statement:**
> “How might we empower elderly and household caretakersX with improved understanding of dieting and nutrition such that Body Mass Index is improved by x% within y months, using a sustainable, cost-effective and readily adoptable digital solution.”

### 3. IDEATE & PROTOTYPE: UI/UX Proof-of-concept
Using Figma or other suitable UI/UX technologies, we will then draft up a suitable layout for our app/website. The UI/UX application does not necessarily have to work, only show where the screens are meant to go. It serves as (a) a layout for later production (b) a method to identify flaws and efficiency of features.

### 4. TESTING: User Testing / ML Testing
With the UI/UX draft, we can then let a small group of users (preferrably target audience) to test and demo the app, therefore allowing us to determine if there are any flaws within the design and if the solution will indeed be useful to them. We can also test the accuracy of the ML models during this period with a testing dataset.

### 5. PROTOTYPE (Phase 2): Production
* Front-end - concerning the aesthetics, UI/UX, and view of the app | Refer to the React Native and Node.js file, it is a web framework that allows HTML, CSS and JS to work together
* Back-end - the code running at the back of the app that runs health algorithms, connects, and allows different algorithms to run | Refer to the Python file, we will be using the Django library as the back-end framework
* Database - the software where personal information and historical data are placed | Refer to the mySQL file
* AI / Machine Learning Algorithms - The actual development of our Computer Vision and Large Language Model algorithms. | Refer to the ML folder

### 6. Future Work / Scalability
Consider adding future work and features, such as diversifying it to fit larger age groups, and certain portfolios such as bodybuilders or parents looking out for their toddler/newborn’s diet. Additionally, if a website is made, an app can be considered, and vice versa. Additionally, the idea of taking photos of the actual food item itself can be considered.
>>>>>>> 35b8990522c00cbb3e5770638c8e24dbe75c18aa
