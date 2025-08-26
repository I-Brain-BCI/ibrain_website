---
# Leave the homepage title empty to use the site title
title:

date: 2022-10-24

type: landing

sections:
  - block: slider
    content:
      slides:
      - title: Nanomaterials Innovation
        content: Pushing the boundaries in design, synthesis, and characterization of nanoscale materials with emphasis on novel nanostructures and device arrays for biological interface applications
        align: left
        background:
          image:
            filename: meshe.png
            filters:
              brightness: 0.6
          position: center
          color: '#666'
        link:
          icon: brain
          icon_pack: fas
          text: Explore Research
          url: ./publication/
      - title: Bioelectronics Frontier
        content: Pioneering the interface between nanoelectronics and life sciences, from sensors for real-time disease detection to development of novel cyborg cells and hybrid nanoelectronics-innervated tissues
        align: left
        background:
          image:
            filename: Bioelectonics.png
            filters:
              brightness: 0.7
          position: right
          color: '#555'
        link:
          icon: microscope
          icon_pack: fas
          text: Explore Research
          url: ./publication/
      - title: Brain Science Excellence
        content: Focusing on novel approaches for integrating electronics within the brain and nervous system, involving non-invasive syringe delivery of neural network-like mesh electronics into targeted brain regions
        align: left
        background:
          image:
            filename: Brain Science.png
            filters:
              brightness: 0.5
          position: center
          color: '#333'
        link:
          icon: users
          icon_pack: fas
          text: Explore Research
          url: ./publication/
    design:
      slide_height: '600px'
      is_fullscreen: false
      loop: true
      interval: 4000

  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: ""   # 不需要文字就留空
    design:
      columns: '1'
      background:
        image: 
          filename: ibrainlogo3.png   # 这里就是你的 logo 图片
          filters:
            brightness: 1
          parallax: false
          position: center
          size: contain               # 这里用 contain 保证 logo 不会被裁剪
          text_color_light: true
      spacing:
        padding: ['100px', '0', '100px', '0']  # 上下留白，让 logo 居中
      css_class: fullscreen

  - block: markdown
    content:
      text: |
        <div style="text-align: center;">
          ![i-BRAIN](ibrainlogo3.png)
        </div>

        ![i-BRAIN](ibrainlogo3.png){.center-image}

        {{< figure src="ibrainlogo4.png" 
           alt="i-BRAIN" 
           class="text-center" 
           width="1300px" 
           height="600px" 
           caption="i-BRAIN Logo" 
           title="Institute Logo" >}}

        {{< figure src="ibrainlogo3.png" alt="i-BRAIN" class="text-center" >}}

        **Mission.** *i-BRAIN* is developing transformative brain-computer interfaces (BCIs) that blur the distinction between electronics and living tissue to produce seamless, noninvasive and fully-stable integration of electronics with the brain to enable groundbreaking research understanding the brain and brain diseases as well as breakthrough technologies for treatment of neurological and neurodegenerative diseases. *i-BRAIN* will create solutions for the near-term but also enable future advances and treatments that today may be considered the realm of science fiction.  

        **Benefits to Society:** The research carried out at *i-BRAIN* will create world-leading advances in brain science and neural engineering that enable transformative treatments of some of the most pressing human diseases facing society today, including Alzheimer's disease, stroke, depression and aging. *i-BRAIN* will also instill a highly interdisciplinary culture in the training of young scientists, engineers and doctors such that they are prepared to lead the development and translation of science and engineering ideas for the benefit of present and future generations.
    design:
      columns: '1'
      background:
        color: 'white'


  
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

  - block: features
    content:
      title: Research Areas
      subtitle: Our cutting-edge research focuses on three main areas
      items:
        - name: Brain-Computer Interfaces
          description: Developing next-generation neural interfaces for direct brain-computer communication
          icon: brain
          icon_pack: fas
        - name: Nanoelectronics
          description: Creating ultra-small electronic devices using semiconductor nanowires and advanced fabrication techniques
          icon: microchip
          icon_pack: fas
        - name: Bioelectronics
          description: Integrating electronics with biological systems for medical applications
          icon: heartbeat
          icon_pack: fas
    design:
      columns: '3'

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