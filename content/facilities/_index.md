---
title: Research Facilities
date: 2022-10-24

type: landing

sections:

  - block: slider
    content:
      slides:
      - title: '<span style="color: #000;"><em>i-BRAIN</em> Nanofab Facilities</span>'
        content: 
          '<span style="color: #000; font-size: 10px;">i-BRAIN encompasses advanced research laboratories, unique nanofabrication facilities and a positive, interdisciplinary culture designed to create a globally influential innovation hub that leverages resources across science, engineering and medicine to create disruptive BCI technologies and the uniquely trained young talent that drive translation and commercialization to treat human brain diseases.</span>'

        align: left
        background:
          image:
            filename: facility_2_sub.png
            filters:
              brightness: 1.0
          position: center
          color: '#fff'
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: '500px'
      is_fullscreen: false
      # Automatically transition through slides?
      loop: false
      # Duration of transition between slides (in ms)
      interval: 2000
      # Custom CSS for text color
      css_style: |
        .hero-title, .hero-lead {
          color: #000 !important;
        }

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
        
        <div class="d-flex justify-content-center" style="position: relative; display: inline-block;">
          {{< figure src="nanofab_layout.png" alt="Nanofabrication Layout" id="nanofab-image" >}}
          
          <!-- 透明覆盖层用于点击检测 -->
          <div class="click-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; pointer-events: none;">
            <a href="./ebl/" class="ebl-area" style="position: absolute; left: 184px; top: 273px; width: 545px; height: 152px; cursor: pointer; pointer-events: all; background: rgba(255,0,0,0.1); border: 2px solid rgba(255,0,0,0.3); display: block; text-decoration: none;" title="点击查看 Electron Beam Lithography 详情"></a>
          </div>
        </div>
        
        <!-- 设施导航栏 -->
        <div class="facility-navbar" style="background: linear-gradient(135deg, #8B1538, #A91B47); margin-top: 20px; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
          <div class="d-flex justify-content-center flex-wrap">
            <button class="nav-btn" data-target="overview" style="background: transparent; border: none; color: white; padding: 12px 20px; cursor: pointer; transition: all 0.3s; border-right: 1px solid rgba(255,255,255,0.2); font-weight: 500;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Overview</button>
            <button class="nav-btn" data-target="lithography" style="background: transparent; border: none; color: white; padding: 12px 20px; cursor: pointer; transition: all 0.3s; border-right: 1px solid rgba(255,255,255,0.2); font-weight: 500;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Lithography</button>
            <button class="nav-btn" data-target="deposition" style="background: transparent; border: none; color: white; padding: 12px 20px; cursor: pointer; transition: all 0.3s; border-right: 1px solid rgba(255,255,255,0.2); font-weight: 500;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Thin Film Deposition</button>
            <button class="nav-btn" data-target="etching" style="background: transparent; border: none; color: white; padding: 12px 20px; cursor: pointer; transition: all 0.3s; border-right: 1px solid rgba(255,255,255,0.2); font-weight: 500;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Etching</button>
            <button class="nav-btn" data-target="metrology" style="background: transparent; border: none; color: white; padding: 12px 20px; cursor: pointer; transition: all 0.3s; border-right: 1px solid rgba(255,255,255,0.2); font-weight: 500;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Metrology and Backend</button>
            <button class="nav-btn" data-target="other" style="background: transparent; border: none; color: white; padding: 12px 20px; cursor: pointer; transition: all 0.3s; font-weight: 500;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Other Facilities</button>
          </div>
        </div>
        
        <!-- 内容展示区域 -->
        <div class="facility-content" style="margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 8px; min-height: 200px;">
          <div id="overview" class="content-panel" style="display: block;">
            <h3 style="color: #8B1538; margin-bottom: 15px;">🏢 设施概览</h3>
            <p>我们的纳米加工洁净室配备了完整的微纳制造工艺链，包括光刻、薄膜沉积、刻蚀、计量检测等关键工艺设备。</p>
            <div class="row mt-3">
              <div class="col-md-6">
                <h5>🔬 主要工艺能力</h5>
                <ul>
                  <li>电子束光刻 (EBL)</li>
                  <li>紫外光刻 (UV Lithography)</li>
                  <li>物理气相沉积 (PVD)</li>
                  <li>化学气相沉积 (CVD)</li>
                </ul>
              </div>
              <div class="col-md-6">
                <h5>📏 技术指标</h5>
                <ul>
                  <li>最小线宽: 8nm</li>
                  <li>套刻精度: ±10nm</li>
                  <li>洁净度: Class 100</li>
                  <li>温湿度控制: ±0.1°C, ±1%RH</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div id="lithography" class="content-panel" style="display: none;">
            <h3 style="color: #8B1538; margin-bottom: 15px;">🔬 光刻工艺</h3>
            <div class="row">
              <div class="col-md-8">
                <h5>电子束光刻 (EBL)</h5>
                <p>高精度电子束光刻系统，支持纳米级图形制备。</p>
                <ul>
                  <li><strong>电子枪类型:</strong> Schottky Field Emission</li>
                  <li><strong>加速电压:</strong> 50kV</li>
                  <li><strong>分辨率:</strong> 8nm</li>
                  <li><strong>电流范围:</strong> 100pA - 100nA</li>
                  <li><strong>样品尺寸:</strong> 最大300mm</li>
                </ul>
                <a href="./ebl/" class="btn" style="background: #8B1538; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; margin-top: 10px; display: inline-block;">查看详细规格 →</a>
              </div>
              <div class="col-md-4">
                <div style="background: #e9ecef; padding: 15px; border-radius: 8px; text-align: center;">
                  <h6>工艺流程</h6>
                  <p style="font-size: 0.9em; margin: 0;">样品准备 → 胶膜涂覆 → 曝光 → 显影 → 检测</p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="deposition" class="content-panel" style="display: none;">
            <h3 style="color: #8B1538; margin-bottom: 15px;">🎯 薄膜沉积</h3>
            <p>提供多种薄膜沉积工艺，满足不同材料和厚度需求。</p>
            <div class="row">
              <div class="col-md-6">
                <h5>物理气相沉积 (PVD)</h5>
                <ul>
                  <li>溅射沉积</li>
                  <li>电子束蒸发</li>
                  <li>热蒸发</li>
                </ul>
              </div>
              <div class="col-md-6">
                <h5>化学气相沉积 (CVD)</h5>
                <ul>
                  <li>等离子体增强CVD</li>
                  <li>低压CVD</li>
                  <li>原子层沉积 (ALD)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div id="etching" class="content-panel" style="display: none;">
            <h3 style="color: #8B1538; margin-bottom: 15px;">⚡ 刻蚀工艺</h3>
            <p>精密刻蚀设备，支持各种材料的图形转移。</p>
            <ul>
              <li><strong>干法刻蚀:</strong> RIE, ICP-RIE, 深硅刻蚀</li>
              <li><strong>湿法刻蚀:</strong> 各种化学刻蚀液</li>
              <li><strong>刻蚀精度:</strong> ±5nm</li>
              <li><strong>深宽比:</strong> 最高50:1</li>
            </ul>
          </div>
          
          <div id="metrology" class="content-panel" style="display: none;">
            <h3 style="color: #8B1538; margin-bottom: 15px;">📊 计量检测</h3>
            <p>完善的计量检测设备，确保工艺质量和产品可靠性。</p>
            <div class="row">
              <div class="col-md-6">
                <h5>形貌检测</h5>
                <ul>
                  <li>扫描电子显微镜 (SEM)</li>
                  <li>原子力显微镜 (AFM)</li>
                  <li>光学显微镜</li>
                </ul>
              </div>
              <div class="col-md-6">
                <h5>电学测试</h5>
                <ul>
                  <li>探针台测试</li>
                  <li>参数分析仪</li>
                  <li>网络分析仪</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div id="other" class="content-panel" style="display: none;">
            <h3 style="color: #8B1538; margin-bottom: 15px;">🔧 其他设施</h3>
            <p>配套的辅助设施和特殊工艺设备。</p>
            <ul>
              <li><strong>清洗设备:</strong> 超声波清洗、等离子体清洗</li>
              <li><strong>烘烤设备:</strong> 热板、烘箱、快速退火炉</li>
              <li><strong>存储设施:</strong> 氮气柜、真空存储</li>
              <li><strong>安全设施:</strong> 化学品柜、废液处理</li>
            </ul>
          </div>
        </div>
        
        <script>
        document.addEventListener('DOMContentLoaded', function() {
          const navButtons = document.querySelectorAll('.nav-btn');
          const contentPanels = document.querySelectorAll('.content-panel');
          
          navButtons.forEach(button => {
            button.addEventListener('click', function() {
              const target = this.getAttribute('data-target');
              
              // 移除所有按钮的激活状态
              navButtons.forEach(btn => {
                btn.style.background = 'transparent';
                btn.style.fontWeight = '500';
              });
              
              // 激活当前按钮
              this.style.background = 'rgba(255,255,255,0.2)';
              this.style.fontWeight = '600';
              
              // 隐藏所有内容面板
              contentPanels.forEach(panel => {
                panel.style.display = 'none';
              });
              
              // 显示目标内容面板
              const targetPanel = document.getElementById(target);
              if (targetPanel) {
                targetPanel.style.display = 'block';
              }
            });
          });
        });
        </script>
        
        #### 电子束光刻 (EBL)
        - **电子枪类型：** Schottky Field Emission, Gaussian beam shape
        - **加速电压：** 50 kV
        - **束流范围：** 100 pA – 100 nA
            - **分辨率：** 8 nm  
            - **套刻精度：** ±10 nm  
            - **拼接精度：** ±10 nm  
            - **最大曝光场：**  
                - 2000 μm @ 25 kV  
                - 1000 μm @ 50 kV  
            - **最大样品尺寸：** 200 mm  


        - **Maskless Aligner:**
            - **最大样品尺寸：** 300 mm / 12 inch  
            - **最大曝光面积：** 290 mm × 290 mm  
            - **分辨率：** ≤600 nm  
            - **套刻精度：** 500 nm @ 200 mm  
            - **光源：** 375 nm / 405 nm 

        
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