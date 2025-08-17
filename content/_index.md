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
        align: center
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
            filename: Bioelectonics.jpg
            filters:
              brightness: 0.7
          position: right
          color: '#555'
        link:
          icon: microscope
          icon_pack: fas
          text: Take a Tour
          url: ./facilities/
      - title: Brain Science Excellence
        content: Focusing on novel approaches for integrating electronics within the brain and nervous system, involving non-invasive syringe delivery of neural network-like mesh electronics into targeted brain regions
        align: right
        background:
          image:
            filename: Brain Science.jpg
            filters:
              brightness: 0.5
          position: center
          color: '#333'
        link:
          icon: users
          icon_pack: fas
          text: Meet the Team
          url: ./people/
    design:
      slide_height: '600px'
      is_fullscreen: false
      loop: true
      interval: 4000

  - block: hero
    content:
      title: |
        i-BRAIN
      image:
        filename: ibrainlogo2.png
      text: |
        <br>
        
        i-BRAIN aims to develop transformative brain-computer interfaces that seamlessly and stably integrate electronics with brain tissue, enabling advanced brain research and new treatments for neurological diseases, while laying the foundation for future breakthroughs.
  
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
      count: 5
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