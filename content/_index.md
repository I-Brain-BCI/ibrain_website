---
# Leave the homepage title empty to use the site title
title:

date: 2022-10-24

type: landing

sections:
  - block: slider
    content:
      slides:
      - title: Cutting-Edge Brain-Computer Interface Research
        content: Exploring the intersection of neuroscience and artificial intelligence to develop next-generation brain-computer interface technologies
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
      - title: State-of-the-Art Laboratory
        content: World-class laboratory equipped with advanced facilities to support groundbreaking research initiatives
        align: left
        background:
          image:
            filename: coders.jpg
            filters:
              brightness: 0.7
          position: right
          color: '#555'
        link:
          icon: microscope
          icon_pack: fas
          text: Take a Tour
          url: ./facilities/
      - title: Excellence in Team
        content: Bringing together top talents dedicated to advancing neural engineering and biomedical engineering
        align: right
        background:
          image:
            filename: contact.jpg
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

  - block: contact
    content:
      title: Join Our Research Team
      subtitle: Current Opportunities
      text: |
        **Open Positions:**
        - PhD Students in Neural Engineering
        - Postdoctoral Researchers in BCI
        - Research Engineers in Nanoelectronics
      email: recruitment@ibrain-lab.com
      phone: +1 (555) 123-4567
      address:
        street: 123 University Ave
        city: Boston
        region: MA
        postcode: '02139'
        country: United States
        country_code: US
      contact_links:
        - icon: envelope
          icon_pack: fas
          name: Email Us
          link: 'mailto:recruitment@ibrain-lab.com'
        - icon: address-card
          icon_pack: fas
          name: Visit Contact Page
          link: './contact/'
    design:
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---