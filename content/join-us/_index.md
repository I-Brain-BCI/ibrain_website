---
title: Join Us
type: landing

sections:
  - block: markdown
    content:
      title: "Join Us"
      text: "We are always looking for talented individuals to join our research team. 
        Explore our current openings below."
    design:
      columns: '1'
      spacing:
        padding: ['20px', '0', '5px', '0']  # 上、右、下、左的padding，
      css_style: 'text-align: center;'

  - block: markdown
    content:
      text: |
        <div style="text-align: center; margin: 3px 0;">
          <hr style="width: 100%; border: none; height: 2px; background: linear-gradient(to right, transparent,rgb(12, 32, 75), transparent);">
        </div>
    design:
      columns: '1'
      spacing:
        padding: ['0', '0', '0', '0']  # 上、右、下、左的padding，将下边距设为0
      background:
        color: 'white'

  # 紧急招聘栏目
  - block: markdown
    content:
      title: |
        <div style="background: linear-gradient(135deg, #dc2626, #ef4444); padding: 15px; border-radius: 12px; margin: 10px 0; box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3); border: 2px solid #dc2626;">
          <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
            <span style="font-size: 1.8em; animation: pulse 2s infinite;">🚨</span>
            <h2 style="color: white; margin: 0; font-weight: bold; font-size: 1.8em; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">URGENT HIRING</h2>
            <span style="font-size: 1.8em; animation: pulse 2s infinite;">🚨</span>
          </div>
          <p style="color: white; margin: 8px 0 0 0; font-size: 1.1em; font-weight: 500;">The following positions need to be filled urgently. Excellent candidates are welcome to apply as soon as possible!</p>
        </div>
      text: ""
    design:
      columns: '1'
      spacing:
        padding: ['10px', '0', '10px', '0']
      background:
        color: 'white'

  - block: collection
    content:
      title: ""
      count: 2
      filters:
        folders:
          - join-us
        title: ["Co-Principal Investigators/Research-Professor", "Lab Manager"]
      offset: 0
      order: asc
      sort_by: 'weight'
    design:
      view: card
      columns: '1'
      spacing:
        padding: ['0', '0', '15px', '0']
      background:
        color: 'white'
      css_style: |
        .card {
          border: 3px solid #dc2626 !important;
          background: linear-gradient(135deg, #fef2f2, #fee2e2) !important;
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.2) !important;
          border-radius: 12px !important;
          position: relative !important;
          overflow: hidden !important;
        }
        .card::before {
          content: "🔥 URGENT";
          position: absolute;
          top: 10px;
          right: 10px;
          background: #dc2626;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8em;
          font-weight: bold;
          z-index: 10;
        }
        .card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 15px 40px rgba(220, 38, 38, 0.3) !important;
          transition: all 0.3s ease !important;
        }

  - block: markdown
    content:
      text: |
        <div style="text-align: center; margin: 15px 0;">
          <hr style="width: 100%; border: none; height: 3px; background: linear-gradient(to right, transparent, #dc2626, transparent);">
        </div>
    design:
      columns: '1'
      spacing:
        padding: ['0', '0', '10px', '0']
      background:
        color: 'white'
      
  - block: collection
    content:
      title: '<span style="color: #000; font-weight: bold;">Academic/Research Positions</span>'
      subtitle: 
      count: 10
      filters:
        folders:
          - join-us
        category: "Academic/Research Positions"
      
      offset: 0
      order: asc
      sort_by: 'weight'
    design:
      view: card
      columns: '1'
      spacing:
        padding: ['5px', '0', '0', '0']  # 上、右、下、左的padding
      background:
        color: 'white'

  - block: markdown
    content:
      text: "🌍 **International Applicants Welcome！！**"
    design:
      columns: '1'
      spacing:
        padding: ['5px', '0', '5px', '0']
      css_style: 'text-align: center; font-size: 1.1em; color: #2563eb;'
      background:
        color: 'white'

  - block: markdown
    content:
      text: |
        <div style="text-align: center; margin: 3px 0;">
          <hr style="width: 100%; border: none; height: 2px; background: linear-gradient(to right, transparent,rgb(12, 32, 75), transparent);">
        </div>
    design:
      columns: '1'
      spacing:
        padding: ['0', '0', '0', '0']  # 上、右、下、左的padding，将下边距设为0
      background:
        color: 'white'

    

  - block: collection
    content:
      title: '<span style="color: #000; font-weight: bold;"><em>i-BRAIN</em> Nanofab Positions</span>'
      count: 10
      filters:
        folders:
          - join-us
        category: "i-BRAIN Nanofab"
      offset: 0
      order: asc
      sort_by: 'weight'
    design:
      view: card
      columns: '1'
      spacing:
        padding: ['10px', '0', '0', '0']  # 上、右、下、左的padding
      background:
        color: 'white'

  - block: markdown
    content:
      text: |
        <div style="text-align: center; margin: 3px 0;">
          <hr style="width: 100%; border: none; height: 2px; background: linear-gradient(to right, transparent,rgb(12, 32, 75), transparent);">
        </div>
    design:
      columns: '1'
      spacing:
        padding: ['0', '0', '0', '0']  # 上、右、下、左的padding，将下边距设为0
      background:
        color: 'white'


  - block: collection
    content:
      title: '<span style="color: #000; font-weight: bold;"><em>i-BRAIN</em> Office Positions</span>'

      count: 10
      filters:
        folders:
          - join-us
        category: "i-BRAIN Office Position"
      offset: 0
      order: asc
    design:
      view: card
      columns: '1'
      spacing:
        padding: ['10px', '0', '0', '0']  # 上、右、下、左的padding
      background:
        color: 'white'      


  - block: markdown
    content:
      text: |
        <div style="text-align: center; margin: 3px 0;">
          <hr style="width: 100%; border: none; height: 2px; background: linear-gradient(to right, transparent,rgb(12, 32, 75), transparent);">
        </div>
    design:
      columns: '1'
      spacing:
        padding: ['0', '0', '0', '0']  # 上、右、下、左的padding，将下边距设为0
      background:
        color: 'white'
---
# Optional banner image
banner:
  caption: 'Join Our Team'
  image: ''
---