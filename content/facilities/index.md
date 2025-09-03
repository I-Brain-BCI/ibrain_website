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
          {{< figure src="nanofab_layout.png" alt="Nanofabrication Layout" id="nanofab-image" >}}
        </div>
        
        <!-- 添加image map -->
        <map name="nanofab-map" id="nanofab-map">
          <area shape="rect" coords="194,289,769,451" onclick="showEBLInfo()" alt="Electron Beam Lithography" style="cursor: pointer;">
        </map>
        
        <!-- EBL设备信息的模态框 -->
        <div id="ebl-modal" class="modal fade" tabindex="-1" role="dialog" style="display: none;">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Electron Beam Lithography (EBL)</h5>
                <button type="button" class="btn-close" onclick="closeEBLModal()" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h4>Electron Beam Lithography (EBL)</h4>
                <ul>
                  <li><strong>eGun Type:</strong> Schottky Field Emission, Gaussian beam shape</li>
                  <li><strong>Acceleration Voltage:</strong> 50 kV</li>
                  <li><strong>Beam Current Range:</strong> 100 pA – 100 nA</li>
                  <li><strong>Resolution:</strong> 8 nm</li>
                  <li><strong>Overlay Accuracy:</strong> ±10 nm</li>
                  <li><strong>Stitching Accuracy:</strong> ±10 nm</li>
                  <li><strong>Maximum Field Size:</strong>
                    <ul>
                      <li>2000 μm @ 25 kV</li>
                      <li>1000 μm @ 50 kV</li>
                    </ul>
                  </li>
                  <li><strong>Maximum Sample Size:</strong> 200 mm</li>
                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeEBLModal()">关闭</button>
              </div>
            </div>
          </div>
        </div>
        
        <script>
        // 页面加载完成后为图片添加image map
        document.addEventListener('DOMContentLoaded', function() {
            // 找到Hugo生成的图片元素
            const img = document.querySelector('#nanofab-image img');
            if (img) {
                // 为图片添加usemap属性
                img.setAttribute('usemap', '#nanofab-map');
                img.style.cursor = 'pointer';
            }
        });
        
        // 显示EBL信息的函数
        function showEBLInfo() {
            const modal = document.getElementById('ebl-modal');
            modal.style.display = 'block';
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        }
        
        // 关闭模态框的函数
        function closeEBLModal() {
            const modal = document.getElementById('ebl-modal');
            modal.style.display = 'none';
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
        
        // 点击模态框背景关闭
        document.addEventListener('click', function(e) {
            const modal = document.getElementById('ebl-modal');
            if (e.target === modal) {
                closeEBLModal();
            }
        });
        </script>
        
        <style>
        /* 模态框样式 */
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1050;
        }
        
        .modal-dialog {
            position: relative;
            width: auto;
            margin: 1.75rem auto;
            max-width: 800px;
        }
        
        .modal-content {
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 0.3rem;
            box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
        }
        
        .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            border-bottom: 1px solid #dee2e6;
        }
        
        .modal-body {
            padding: 1rem;
        }
        
        .modal-footer {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 1rem;
            border-top: 1px solid #dee2e6;
        }
        
        .btn {
            padding: 0.375rem 0.75rem;
            margin-left: 0.5rem;
            border: 1px solid transparent;
            border-radius: 0.25rem;
            cursor: pointer;
        }
        
        .btn-secondary {
            background-color: #6c757d;
            border-color: #6c757d;
            color: #fff;
        }
        
        .btn-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        /* 可点击区域提示 */
        area:hover {
            cursor: pointer;
        }
        </style>
        
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