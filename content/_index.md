---
# Leave the homepage title empty to use the site title
title:

date: 2022-10-24

type: landing

sections:

  - block: markdown
    content:
      text: |

        {{< figure src="ibrainlogo4.jpg" 
           alt="i-BRAIN" 
           class="text-center" 
           width="1300px" 
           height="315px">}}

        **Mission.** *i-BRAIN* is developing transformative brain-computer interfaces (BCIs) that blur the distinction between electronics and living tissue to produce seamless, noninvasive and fully-stable integration of electronics with the brain to enable groundbreaking research understanding the brain and brain diseases as well as breakthrough technologies for treatment of neurological and neurodegenerative diseases. *i-BRAIN* will create solutions for the near-term but also enable future advances and treatments that today may be considered the realm of science fiction.  

        **Benefits to Society:** The research carried out at *i-BRAIN* will create world-leading advances in brain science and neural engineering that enable transformative treatments of some of the most pressing human diseases facing society today, including Alzheimer's disease, stroke, depression and aging. *i-BRAIN* will also instill a highly interdisciplinary culture in the training of young scientists, engineers and doctors such that they are prepared to lead the development and translation of science and engineering ideas for the benefit of present and future generations.
    design:
      columns: '1'
      background:
        color: 'white'

  - block: slider
    content:
      slides:
      - title: Disruptive BCI Technology
        content: "Merging the power and scalability of silicon integrated circuits and ultra-flexible minimally-invasive polymer-based electronics for chronic cognitive and motor studies in rodents and nonhuman primates. A central focus is to monitoring and modulate neural activity on a scale heretofore not possible in animal disease models and to translate these advanced neuro-technologies to humans."
        align: left
        background:
          image:
            filename: researcharea_1.png
            filters:
              brightness: 0.6
          position: center
          color: '#666'
      - title: Ideal Brain/Electronics Interfaces
        content: "Develop *ideal* flexible probes that solve key issues facing all technologies today. In simple terms, we are developing BCIs that are stable in recording and stimulation at the level of individual neurons for the life-span of an adult human. The work involves basic research across sciences and engineering, studies in rodents and NHPs and ultimately translation to humans."
        align: left
        background:
          image:
            filename: researcharea_2.png
            filters:
              brightness: 0.7
          position: right
          color: '#555'
      - title: BCIs for Regenerative Medicine
        content: "We are developing 'pro-regenerative' BCIs that not only monitor and/or stimulate neural activity but also promote and control the growth of new neural tissue to repair the brain. The work involves basic research across sciences, engineering and medicine with the goal of translation to human patients for personalized treatment of a range of brain diseases in a way simply not possible today."
        align: left
        background:
          image:
            filename: researcharea_3.png
            filters:
              brightness: 0.5
          position: center
          color: '#333'
      - title: i-BRAIN Nanofab Facility
        content: "A world-class nanofabrication platform that empowers researchers to design, prototype, and realize micro- and nano-scale devices at the frontiers of brain science and neurotechnology. The facility provides advanced tools, materials, and expertise for state-of-the-art processing, enabling breakthroughs in neural interfaces, sensors, and next-generation biomedical technologies. By fostering collaboration across disciplines, the Nanofab supports both fundamental discoveries and translational research, while also training the next generation of scientists and engineers in cutting-edge fabrication techniques."
        align: left
        background:
          image:
            filename: facility_overall.png
            filters:
              brightness: 0.6
          position: center
          color: '#444'
        link:
          icon: cogs
          icon_pack: fas
          text: Explore Facilities
          url: ./facilities/
      - title: Other Key Facilities
        content: "The integration i-BRAIN within [**Shenzhen Medical Academy for Research and Translation (SMART)**](https://smart.org.cn/) in Guangming provides a vibrant research environment with virtually all critical facilities within walking distance thereby reducing barriers to transformative research. Additional key facilities available at SMART include (i) state-of-the art optical imaging facility and (ii) fully-staffed 12000 cage  rodent facility. In addition, the nearby [**Brain Science Infrastructure ShenZhen**](https://www.bsisz.cn/h-col-128.html#/home) has full-time staff monitoring 2000 NHP cages, state of the art surgical facilities, and dedicated space for our NHP BCI studies."
        align: left
        background:
          image:
            filename: nhp_facility.png
            filters:
              brightness: 0.6
          position: center
          color: '#444'

    design:
      slide_height: '800px'
      is_fullscreen: false
      loop: true
      interval: 4000


  
  - block: collection
    content:
      title: Latest News
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'

  - block: collection
    content:
      title: Latest Papers
      text: ""
      count: 7
      filters:
        folders:
          - publication
    design:
      view: citation
      columns: '1'

  - block: markdown
    content:
      title: Join Our Research Team
      subtitle: 
      text: |
        <div style="text-align: center; padding: 40px; background: linear-gradient(135deg, #4bb6ff 0%, #2563eb 100%); border-radius: 10px; color: white; margin: 20px 0;">
          <h3 style="color: white; margin-bottom: 20px;">Ready to Make an Impact?</h3>
          <a href="./careers/" style="background: white; color: #2563eb; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block;">Join Us</a>
        </div>
    design:
      columns: '1'
---