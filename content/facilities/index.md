---
title: Research Facilities
date: 2022-10-24

type: landing

sections:
  - block: hero
    content:
      title: State-of-the-Art Research Facilities
      text: |
        Our laboratory is equipped with cutting-edge instruments and facilities to support world-class research in brain-computer interfaces, nanoelectronics, and bioelectronics.
      image:
        filename: facility_overall.png
    design:
      spacing:
        padding: ['40px', '0', '40px', '0']

  - block: markdown
    content:
      title: Equipment Inventory
      subtitle: 
      text: |
        ## Nanofabrication & Cleanroom
        
        <div class="d-flex justify-content-center">
          <img src="nanofab_layout.png" alt="Nanofabrication Layout" usemap="#lab-map" style="max-width: 100%; height: auto;">
          <map name="lab-map">
            <area shape="rect" coords="194,289,769,451" onclick="showEBLInfo()" alt="Electron Beam Lithography" style="cursor: pointer;">
          </map>
        </div>

        <!-- EBL设备信息显示区域 -->
        <div id="ebl-info" class="equipment-info mt-4" style="display: none; border: 2px solid #007bff; padding: 20px; border-radius: 8px; background-color: #f8f9fa;">
          <h4>Electron Beam Lithography (EBL)</h4>
          <ul>
            <li><strong>eGun Type:</strong> Schottky Field Emission, Gaussian beam shape</li>
            <li><strong>Acceleration Voltage:</strong> 50 kV</li>
            <li><strong>Beam Current Range:</strong> 100 pA – 100 nA</li>
            <ul>
              <li><strong>Resolution:</strong> 8 nm</li>
              <li><strong>Overlay Accuracy:</strong> ±10 nm</li>
              <li><strong>Stitching Accuracy:</strong> ±10 nm</li>
              <li><strong>Maximum Field Size:</strong></li>
              <ul>
                <li>2000 μm @ 25 kV</li>
                <li>1000 μm @ 50 kV</li>
              </ul>
              <li><strong>Maximum Sample Size:</strong> 200 mm</li>
            </ul>
          </ul>
          <button onclick="hideEBLInfo()" class="btn btn-secondary mt-2">关闭</button>
        </div>

        <script>
        function showEBLInfo() {
          // 隐藏其他可能的设备信息
          const allInfos = document.querySelectorAll('.equipment-info');
          allInfos.forEach(info => info.style.display = 'none');
          
          // 显示EBL信息
          document.getElementById('ebl-info').style.display = 'block';
          
          // 滚动到信息区域
          document.getElementById('ebl-info').scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        }
        
        function hideEBLInfo() {
          document.getElementById('ebl-info').style.display = 'none';
        }
        </script>
        
        ### Mission
        Our mission is to establish a world-class nanofabrication platform that empowers researchers to design, prototype, and realize micro- and nano-scale devices at the frontiers of brain science and neurotechnology.
        
        ### Summary
        The i-BRAIN Nanofabrication Facility includes 550 m² of Class 100 cleanroom space and 400 m² of Class 1000 service and equipment space.
        
        ### Lithography Systems
        
        #### DUV Scanner (2026Q)
        - **Resolution (Critical Dimension):** ≤110 nm
        - **CD Variation at 0.11 μm Resolution:**
          - Dense lines: ≤10 nm at ±0.2 μm defocus; ≤8 nm at best focus
          - Isolated lines: ≤14 nm at ±0.15 μm defocus; ≤8 nm at best focus
        
        #### Electron Beam Lithography (EBL)
        - **eGun Type:** Schottky Field Emission, Gaussian beam shape
        - **Acceleration Voltage:** 50 kV
        - **Beam Current Range:** 100 pA – 100 nA
            - **Resolution:** 8 nm  
            - **Overlay Accuracy:** ±10 nm  
            - **Stitching Accuracy:** ±10 nm  
            - **Maximum Field Size:**  
                - 2000 μm @ 25 kV  
                - 1000 μm @ 50 kV  
            - **Maximum Sample Size:** 200 mm  


        - **Maskless Aligner:**
            - **Maximum Sample Size:** 300 mm / 12 inch  
            - **Maximum Exposure Area:** 290 mm × 290 mm  
            - **Resolution:** ≤600 nm  
            - **Overlay Accuracy:** 500 nm @ 200 mm  
            - **Light Source:** 375 nm / 405 nm 

        
        ## Mask Aligner Specifications

        - **Automation:** Mechanical semi-automatic transfer, automatic alignment, and automatic exposure  
        - **Exposure Area:** 210 × 210 mm  
        - **Illumination Uniformity:** ≤ 4%  
        - **UV Beam Angle:** ≤ 2°  
        - **UV Central Wavelengths:** 365 / 405 / 435 nm  
        - **Gap Adjustment:** 0 – ≥ 1000 µm, adjustable  
        - **Alignment Accuracy:**  
          - Front-side alignment: ≤ ±1 µm  
          - Backside alignment: ≤ ±2 µm (with infrared alignment capability)  
        - **Exposure Modes:**  
          - Contact/vacuum exposure: ≤ 1 µm  
          - Proximity exposure gap: 10 µm ± 3 µm  
          - Modes: Hard contact (vacuum), soft contact, proximity exposure  
        - **Pre-Alignment System:**  
          - Image recognition and automatic rotation system with pre-alignment stage  
          - Rotation angle range: ≥ ±180°  
          - Rotation accuracy: ≤ 0.01°  
        - **Automatic Alignment System:**  
          - Includes UVW alignment stage and air-bearing auto-leveling system  
          - Alignment range (X, Y): ≥ ±5 mm  
          - Rotation angle adjustment: ≥ ±3°  
          - Microscopes (top and bottom) with two sets of lenses each, controlled by XYZ motorized stages  
        - **Mask Sizes Supported:** 9" × 9", 7" × 7", 6" × 6", 5" × 5"  
        - **Substrate Sizes Supported:** 8", 6", 5", 4", 3"  
        - **Alignment Stage Z-axis Movement:** ≥ ±25 mm, with three-point air-bearing leveling  

        ## E-Beam Evaporator System Specifications

        - **Maximum Wafer Size:** 200 mm / 8 inch  
        - **Substrate Temperature:** Up to 80°C  
        - **Film Uniformity:** ±2% @ 8 inch  
        - **Crucibles:** 6 crucibles, 25 cc each  
        - **Power Supply:** 10 kW  
        - **Electron Beam High Voltage:** 10 kV  
        - **Maximum Beam Current:** 1000 mA  
        - **Photolithography** - Maskless Aligner
          - UV exposure system with contact and proximity modes
          - Minimum feature size: 1 μm

        ### **Etching & Deposition**
        - **Reactive Ion Etching (RIE)** - Oxford Plasmalab 80 Plus
          - Anisotropic dry etching for silicon, III-V semiconductors
          - Multiple gas chemistry options
        
        - **Chemical Vapor Deposition (CVD)** - Aixtron 200/4 RF-S
          - Metal-organic CVD for III-V nanowire growth
          - Temperature range: 400-800°C
        
        - **Atomic Layer Deposition (ALD)** - Cambridge NanoTech Savannah S100
          - Conformal thin film deposition
          - Thickness control: < 1 Å precision
        
        ---
    design:
      columns: '1'

  

  # - block: markdown
  #   content:
  #     title: Visit Our Facilities
  #     subtitle: Schedule a tour or discuss collaboration opportunities
  #     text: |
  #       <div style="text-align: center; padding: 40px; background: linear-gradient(135deg, #28a745 0%, #20c997 100%); border-radius: 10px; color: white; margin: 20px 0;">
  #         <h3 style="color: white; margin-bottom: 20px;">Interested in Our Facilities?</h3>
  #         <p style="font-size: 18px; margin-bottom: 30px;">Schedule a facility tour or discuss potential collaborations with our team.</p>
  #         <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
  #           <a href="../contact/" style="background: white; color: #28a745; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block;">Contact Us</a>
  #           <a href="mailto:facilities@ibrain-lab.com" style="background: rgba(255,255,255,0.2); color: white; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block; border: 2px solid white;">Schedule Tour</a>
  #         </div>
  #       </div>
  #   design:
  #     columns: '1'
---