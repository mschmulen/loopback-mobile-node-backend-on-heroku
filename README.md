##Configuring your LoopBack Server on Heroku

###First install the StrongLoop Suite and Heroku tooling on your developer machine.

1. Download and install StrongLoop to your local dev machine

2. Register for a Heroku Account at heroku.com and install the Heroku Toolbelt (https://toolbelt.heroku.com/)

3. Login with the heroku command line:

heroku login


###Create your custom LoopBack mobile API middle tier.

1. Create and prepare your StrongLoop LoopBack Node application on your local machine
2. 
```
slc lb project loopback-mobile-node-backend-on-heroku
cd loopback-mobile-node-backend-on-heroku
slc lb model product
slc lb model customer
slc lb model location
slc install
```

1. Heroku apps require a Procfile. You'll need to add this to the root
of your app

```
echo “web: node run app.js” >> Procfile
```

1. Create a git repository and add your application:

```
git init
git add .  
git commit -m "init"
```

1. Create your heroku app push it to heroku master.

```
heroku create
git push heroku master
```

1. Configure your scaling, in this case we will use a singe free dyno.

```
heroku ps:scale web=1
```

1. Verify your application status and open a browser to your running app

```
heroku ps
heroku open
```

*IMPORTANT:* your StrongLoop account and Heroku account must use
the same email address in order for us to match retrieve your data.

###Treating Heroku like a MBaaS

Once you have deployed your app to the cloud verify your LoopBack Mobile API tier is up and running by hitting the API explorer page on your local machine at ```http://localhost:3000/explorer```


Now that your newly created StrongLoop server is up, let's take a look at what you get and connect your hosted MBaaS to a native Mobile iPhone app

Since you have the 'loopback-mobile-getting-started' github repo on your local machine  you can simply open the loopback iOS guide app located at ```/loopback-ios-app/loopback-ios-multi-model.xcodeproj``` with XCode.

Once the XCode Project is open you will need to modify your Adaptor endpoint to point to your Heroku Instance.  Change the 'localhost' address to point to your endpoint IP address in the AppDelegate.m file.

```
_adapter = [LBRESTAdapter adapterWithURL:[NSURLURLWithString:@"http://localhost:3000"]];'
```

Hit command R in XCode and walk through the walk the guide application instructions.


If you would like to find some more examples on how to integrate native iOS applications with LoopBack make sure and check out the [github.com/strongloop-community/loopback-examples-ios](http://github.com/strongloop-community/loopback-examples-ios) , where you will find a UITableView, MapView and 'custom remote procedures' samples.


If you are using a cross platform mobile tool such as [Appcelerator Titanium](http://appcelerator) ( javascript) or [Xamarin](http://xamarin.com) ( c# )  make sure and check out our other examples at github.com/strongloop-community .

Now that you have your StrongLoop Suite ( StrongNode, StrongOps and LoopBack ) up and configured you can start building out your mobile client application. You can identify ‘hot spots’ and latency with StrongOps or look for stress inside your node.js server application code. You can customize your services and data by extending the open source Node LoopBack API tier with custom code or NPM modules from the community.

 