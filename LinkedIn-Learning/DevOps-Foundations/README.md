# By Ernest Mueller and James Wickett

## DevOps Basics

### What is DevOps?

"The practice of operations and development engineers participating together in the entire service lifecycle, from design through the development process to production support."  
<https://theagileadmin.com/what-is-devops>  
  
Replaces the model where several individual teams work independently.  
  
Five Levels of DevOps:  

1. Values
2. Principles
3. Methods
4. Practices
5. Tools
  
Teams using DevOps practices:  

- 30x more changes deployed
- 200x shorter lead times
- 60x fewer failures
- 168x error recovery rate

### DevOps Core Values: The CAMS Model

Culture
> Development and operations have historically been separate, and this has resulted in a gap in communication. DevOps aims to bridge the gap.  

Automation
> People before process before tools. Automating the tools in your daily workflow allows you to focus on the people and processes at hand.  

Measurement
> Sometimes we choose the wrong metrics to watch and sometimes we fail to incentivize metrics properly. DevOps principles encourage measuring:  

> - Mean Time to Recovery (MTtR)
> - Cycle Time
> - Cost
> - Revenue
> - Employee Satisfaction

Sharing
> The feedback loop that helps us to continuously improve.

### DevOps Principles: The Three Ways

1. Systems Thinking

> We should focus on the overall outcome of the entire pipeline or value chain. Focusing too much on one particular link in the chain can result in negative consequences for other links.

2. Amplifying Feedback Loops

> Effective feedback is what drives any control loop designed to improve a system.

3. Continuous Experimentation and Learning

> Skills are obtained by trying something new. Skills are mastered by practicing something repeatedly. Try new things, and practice the ones that work.

### Your DevOps Playbook

Five major methodologies exist in the DevOps playbook.

1. People over Process over Tools

> Starting with the person first, create a process around them, then equip them with the tools needed to succeed.

2. Continuous Delivery

> The process of coding, testing, and releasing software in frequent, small batches to improve overall quality and velocity.

3. Lean Management

> Administers work in small batches, limits work in progress, implements feedback loops, and integrates visualizations.

4. Visible Ops-Style Change Control

> Eliminate fragile artifacts, create a repeatable build process, manage dependencies, and create an environment of continuous improvement.

5. Infrastructure as Code

> Treat the system like code. Check processes and procedures into source control. Review, build, and test regularly. And manage the entire system programatically.

### Ten Practices for DevOps Success: Ten Through One

10. Incident Command System

> Most ICS's are set up for large, disasterous events. But life is full of small setbacks that can all be better handled by utilizing the teachings of ICS.

9. Developers on Call

> Rather than having one team develop a product, and another provide support for it, the same team is responsible for both. This eliminates many layers of communication and allows for much faster response, repair, and redistribution.

8. Public Status Pages

> The only thing that's been shown to improve customer satisfaction and retain trust during a service outage is communication.

7. Blameless Postmortems

> By focusing on fixing an issue, rather than trying to figure out who caused it, we can move forward instead of making ourselves feel better while making our actual situation worse.

6. Embedded Teams

> Rather than splitting teams to fire-and-forget, both disciplines closely coordinate and take responsibility to create and implement solutions reliably.

5. The Cloud

> Cloud solutions provide an entirely API-driven way to create and control infrastructure, allowing one to treat systems infrastructure as any other program component. New ideas can be tried and tested without having to wait on anything.

4. Andon Cords

> The strategy from Toyota that allowed anyone in the production line to "pull the cord" and halt production to assess a problem.

3. Dependency Injection

> Sometimes called "Inversion Control", a strategy where loosely coupled dependencies are kept separate until runtime, minimizing difficulties between the various dependencies.

2. Blue-Green Deployment

> Instead of having testing and production separated, you have two identical systems. One of the systems is upgraded, then takes over live service. If everything works as expected, the other server is then ready for upgrade. If not, live service is shifted back to the previous system and work continues on the new system.

1. The Chaos Monkey

> Rather than focusing on making individual components as available as possible, shift focus to make the system as solid as possible. That way, even if one component fails, the rest of the system stays up.

### DevOps Tools: The Cart or the Horse

The DevOps Toolchain

> There's not a single tool that will do everything you need. Instead, you have a series of tools that can be composed into a tool chain to address your needs. Remember "The First Way" though. A tool is only useful to the degree that it supports the entire system.

The advancing of technology adds to the fun.

> New tools can give you a fantastic new way of working, or they could just give you a fancy way of crashing everything. Strategies will need to change over time in the face of change.

Tool Criteria

> 1. Programmable. A tool should work well with others, be capable of automation, and callable from an API or command line. UI-driven tools are great for users, but not great in DevOps.
> 2. Verifiable. The best kind of DevOps tool explains clearly what it's doing and provides some way to verify that it did so correctly.
> 3. Well behaved. You should be able to integrate the tool into your management structre without much issue. Change control, testing, and deployability should be little to no effort.

As the Dev in DevOps implies, sometimes you will need to create your own tools. Make sure it meets the same criteria as above.

## DevOps: A Culture Problem

### The IT Crowd and the Coming Storm

The Wall of Confusion is the phenomena where two separate groups have a break in communication, such as developers not informing system administrators of a new feature in a program, which then cause issues and increased workload.

> The institution of information technology incentivizes opposing behavior. Development is tasked with moving fast and changing things. Operations is tasked with maintaining stability and controlling change. They are, by their nature, incompatible, and cause harmful conflicts of interest and diminished feedback loops.

### Use Your Words

### Do Unto Others

### Throwing Things Over Walls

### Kaizen: Continuous Improvement

## The Building Blocks of DevOps

### AGILE

### LEAN

### ITIL, ITSM, and the SDLC

## Infrastructure Automation

### Infrastructure as Code

### Golden Image to Foil Ball

### Immutable Deployment

### Your Infrastructure Toolchain

## Continuous Delivery

### Small + Fast = Better

### Continuous Integration Practices

### The Continuous Delivery Pipeline

### The Role of QA

### Your CI Toolchain

## Reliability Engineering

### Engineering Doesn't End with Deployment

### Design for Operation: Theory

### Design for Operation: Practice

### Operate for Design: Metrics and Monitoring

### Operate for Design: Logging

### Your SRE Toolchain

## Additional DevOps Resources

### Unicorns, Horses, and Donkeys, Oh My

### The Best DevOps Books You Need to Read

### Navigating the Series of Tubes

## The Future of DevOps

### Cloud to Containers to Serverless

### The Rugged Frontier of DevOps: Security