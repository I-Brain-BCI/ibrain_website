---
title: Contact
date: 2022-10-24
type: landing

sections:
  - block: contact
    id: contact
    content:
      title: Contact Information
      subtitle:
      text: |
        Ready to join our team? Get in touch with us for more information about current opportunities or to discuss potential collaborations.
        
        For career opportunities, please visit our [Careers page](../careers/).
      # Contact (add or remove contact options as necessary)
      email: ibrain@smart.org.cn
      address:
        street: Weiguang Life Science Park Building A1, 12th Floor
        city: Shenzhen
        region: Guangdong
        postcode: '518000'
        country: China
        country_code: CN
      coordinates:
        latitude: '22.8015'
        longitude: '113.96247'
    
      # Automatically link email and phone or display as text?
      autolink: true
    
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: '2'

  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: contact.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen
---
