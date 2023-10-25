# Import WordPress to local Mamp
*Every database is created with
username:[root] password:[root]
and WordPress databases login are
username:[admin] password:[root]
## Before you start
1. Install [Mamp](https://www.mamp.info/en/downloads/) on your computer
2. Move the folder you clone from this GitHub into the Mamp root folder. If you're on Mac, it should be in Applications ▹ MAMP ▹ htdocs by default. Or you can locate the Mamp root folder under the Mamp setting.

*You can't change any folder name or this won't work
## 1. Import Database
### Import Database using phpMyAdmin

1. Locate this project database which is the .sql file in this GitHub.

2. Open __Mamp__

3. Click start
<img width="648" alt="Screen Shot 2566-01-26 at 17 43 15" src="https://user-images.githubusercontent.com/122365726/214816748-104b50d9-ce02-4d15-852b-e604d2321022.png">

4. Go to http://localhost:8888/MAMP/?language=English or click __WebStart button__

5. Click tools then go to __phpMyAdmin__

6. Go to __Databases__ tab

7. Create a new database by clicking on create

   * The database name must be the same as the .sql file in this project
<img width="1142" alt="Screen Shot 2566-01-26 at 17 52 32" src="https://user-images.githubusercontent.com/122365726/214818411-e2ade1fc-d775-436c-8083-2631b53c61b0.png">

8. Go to the databases you created by clicking its name on the left side menu.

9. Click __Import__ button on the top bar.

10. Click upload a file then locate the [DatabaseName].sql file.
If you have a problem with file size follow the instructions [here](http://localhost:8888/phpMyAdmin5/doc/html/faq.html#faq1-16)

11. If the upload is successful it'll show something like this.
<img width="1159" alt="Screen Shot 2566-01-26 at 18 02 54" src="https://user-images.githubusercontent.com/122365726/214824153-79e83a5c-2efe-446e-9522-9464219f3704.png">

### Import Database using Terminal
1. Open a new terminal window
CAREFUL: This will replace all tables in the database you specify!

2. /applications/MAMP/library/bin/mysql -u [USERNAME] -p [DATABASE_NAME] < [PATH_TO_SQL_FILE]
⋅⋅* Hit the Enter Key
⋅⋅* Example:
/applications/MAMP/library/bin/mysql -u root -p wordpress_db < /Applications/MAMP/htdocs/backupDB.sql
Quick Tip: Don’t forget that you can simply drag the file into the terminal window and it will enter the location of the file for you.

3. You should be prompted with the following line:
- Enter password:
- Type your password, keep in mind that the letters will not appear, but they are there
- Hit the enter key

4. Check if your database was successfully imported
- Navigate to phpMyAdmin in a browser
- http://localhost:8888/MAMP/

## 2.Accessing the WordPress dashboard

1. Go to __Webstart__ page.

2. Click on __My Website__

3. Click on [Project folder name].

4. Login using Username: admin Password: root

_**Warning!!!** Some images might have some error loading after being imported please compare them to the [Live Site](https://brightdolphins.com/) and make changes to the ones that aren't loading correctly

# Post

**Posts page is where we make changes to content displayed in our project and career pages**

## Making new project pages

To create a new project, I recommended duplicating and modifying the existing project page by...

1. Choose a project with the section you want.

2. On the Posts page hover over that project name then click _Happyclone_

3. Access the duplicate page. It should be named in this format
(ProjectName) - [Cloned#xxxx]

<img width="1200" alt="Screenshot 2566-10-24 at 17 29 41" src="https://github.com/brightdolphins/BrightDolphinsWebsite/assets/122365726/4c13df81-fc17-448f-a86c-13008e7fbee3">

4. Rename the Page to the new project name

5. Change project detail in the side menu

- Visibility - Set to __Private__ when you still making change. Set to __Public__ when you are ready to make it go live
- Template - Must set to __Elementor Canvas__
- URL - Change PERMALINK if necessary
- Categories - Make sure only the __Project__ check box in the is active
- Tags - add/change __tags__ that are relevant to the project
- Featured image - Upload highlight image that will be displayed on __Our project__ page
- Excerpt - Project description that will display beneath the project name on __Our project__ page

6. To adjust and write more project detail Click on Edit with Elementor
   
## Making new career pages

1. Click __add new__ to create new post
2. Change page detail
- Visibility - Set to __Private__ when you still making change. Set to __Public__ when you are ready to make it go live
- Template - Must set to __Elementor Canvas__
- URL - Change PERMALINK if necessary
- Categories - Make sure only the __Career__ check box in the is active
- Tags - add/change __tags__ that are relevant to the position
- Featured image - You don't need to add any feature image for this page
- Excerpt - Position location that will display on the location column on __careers__ page
3. After change post categories to career text box will appear
<img width="1030" alt="Screenshot 2566-10-25 at 15 29 39" src="https://github.com/brightdolphins/BrightDolphinsWebsite/assets/122365726/03eb70a6-570e-4264-bedb-2a68e3d12688">
- Salary title - Header that will appear above salary detail
- Salary - Add salary range for the position
- Location title - Header that will appear above location detail
- Location - add position location detail
- Working hours title - Header that will appear above working hours detail
- Working hours - Add position works hour
- Qualifications title
- Qualifications detail
- Additional information

## Adjusting other main pages
The pages page is where we make changes to all other main pages.

### Adding/Removing Team member
On the Pages page Hovering on _Our Team_ pages then click edit with Elementor

* Remove a member
	Hover over that member ▹ right click ▹ Delete

* Add a member
	Hover over any member ▹ right click ▹ Duplicate ▹ move it to the section you want ▹ Change Image/Name/Job/Description on the left menu

_Each row shouldn't have more than 3 people if there are more please move it to the new row by clicking the Plus icon on top of any section then move it to where it should be._

## Deploying Site/Make site go live
WP2Static is a tool we use to deploy the site on Netlify.

1. Click _WP2Static_ on the left menu
2. Click _Generate static site_
3. Wait for the process to be finished, after it is done the text will appear on the logs below.
4. Check the live site, and make sure the change is made without any problem

### If the site doesn't deploy correctly
* try clear plugin cache by going to _WP2Static_ and _cache_ and click _Delete all caches_ ,then try _Generate static site_ again
* try reinstall the plugin by click _plugins_ on the left menu, locate WP2Static. Click disable and delete it. Then follow this [instruction]((https://drive.google.com/file/d/1G18BTVJv993nNFKB7rzRdIDpApjImJaF/view?usp=drive_link))

_You may need to change plugin version to the older or new one if the current version doesn't work on your PC you can search around on your search engine for it._
