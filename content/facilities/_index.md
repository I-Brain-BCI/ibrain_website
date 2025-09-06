---
title: Research Facilities
date: 2022-10-24

type: landing

sections:

  - block: slider
    content:
      slides:
      - title: '<span style="color: #000; font-weight: bold;"><em>i-BRAIN</em> Nanofab Facilities</span>'
        content: 
          '<span style="color: #000; font-size: 20px; line-height: 1.1 !important;">i-BRAIN encompasses advanced research laboratories, unique nanofabrication facilities and a positive, interdisciplinary culture designed to create a globally influential innovation hub that leverages resources across science, engineering and medicine to create disruptive BCI technologies and the uniquely trained young talent that drive translation and commercialization to treat human brain diseases.</span>'

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
      spacing:
        padding: ['0', '0', '0', '0']  # 上、右、下、左的padding，将下边距设为0


  # - block: hero
  #   content:
  #     title: State-of-the-Art Research Facilities
  #     text: |
  #       Our laboratory is equipped with cutting-edge instruments and facilities to support world-class research in brain-computer interfaces, nanoelectronics, and bioelectronics.
  #     image:
  #       filename: facility_overall.png
  #   design:
  #     spacing:
  #       padding: ['40px', '0', '40px', '0']

  - block: markdown
    content:
      title: 
      subtitle: 
      text: |
        <!--         
        <div class="d-flex justify-content-center" style="position: relative; display: inline-block;">
          {{< figure src="nanofab_layout.png" alt="Nanofabrication Layout" id="nanofab-image" >}}
          
          <div class="click-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; pointer-events: none;">
            <a href="./ebl/" class="ebl-area" style="position: absolute; left: 184px; top: 273px; width: 545px; height: 152px; cursor: pointer; pointer-events: all; background: rgba(255,0,0,0.1); border: 2px solid rgba(255,0,0,0.3); display: block; text-decoration: none;" title="点击查看 Electron Beam Lithography 详情"></a>
          </div>
        </div>
         -->
        <!-- 设施导航栏 -->
        <div class="facility-navbar" style="background: #6B5E4E; margin-top: 20px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
          <div class="d-flex justify-content-center flex-wrap">
            <button class="nav-btn" data-target="overview" style="background: transparent; border: none; color: white; padding: 12px 20px; cursor: pointer; transition: all 0.3s; border-right: 1px solid rgba(255,255,255,0.2); font-weight: 500; flex: 1; text-align: center;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Overview</button>
            <button class="nav-btn" data-target="lithography-bay" style="background: transparent; border: none; color: white; padding: 12px 20px; cursor: pointer; transition: all 0.3s; border-right: 1px solid rgba(255,255,255,0.2); font-weight: 500; flex: 1; text-align: center;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Lithography Bay</button>
            <button class="nav-btn" data-target="deposition-bay" style="background: transparent; border: none; color: white; padding: 12px 20px; cursor: pointer; transition: all 0.3s; border-right: 1px solid rgba(255,255,255,0.2); font-weight: 500; flex: 1; text-align: center;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">Deposition Bay</button>
            <button class="nav-btn" data-target="metrology-other-bay" style="background: transparent; border: none; color: white; padding: 12px 20px; cursor: pointer; transition: all 0.3s; font-weight: 500; flex: 1; text-align: center;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">The Metrology & Other Bay</button>
          </div>
        </div>
        
        <!-- 内容展示区域 -->
        <div class="facility-content" style="margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 8px; min-height: 200px;">
          <div id="overview" class="content-panel" style="display: block;">
            <h3 style="color: #8B1538; margin-bottom: 15px;">🏢 Facility Overview</h3>
            <p>The i-BRAIN Nanofabrication Facility features 550 m² of Class 100 cleanroom space and 400 m² of Class 1000 service and equipment areas, supporting research and prototyping on wafers up to 200 mm (8 inches). The facility is equipped for advanced lithography, including electron-beam lithography, DUV scanner, mask aligners, maskless aligners, automatic coater/developer tracks, spin coaters, and hotplates. Thin-film deposition capabilities include e-beam evaporators for metals and sputtering systems for metal oxides. Etching tools include wet benches and plasma ashers, while metrology and characterization are supported by CD-SEM, optical microscopes, and profilometers. The facility provides a comprehensive environment for micro- and nanofabrication, enabling cutting-edge research and device development.</p>
          </div>

          <div id="lithography-bay" class="content-panel" style="display: none;">
            <h3 style="color: #8B1538; margin-bottom: 15px;">Lithography Bay</h3>
            <p>
              The Lithography Bay is a core area of the <strong><em>i-BRAIN</em></strong> Nanofabrication Facility, dedicated to high-precision patterning of micro- and nanoscale structures on wafers up to 200 mm (8 inches). 
              It houses state-of-the-art lithography tools:
            </p>
            
          <!-- ✅ Stepper -->
          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p><strong>ASML KrF Stepper:</strong> Deep-UV projection lithography down to 110 nm resolution on 200 mm wafers.</p>
            <div style="text-align: center; margin: 15px 0;">
              {{< figure src="stepper.png" alt="ASML KrF Stepper" width="80%" >}}
            </div>
          </div>

          <!-- ✅ EBL -->
          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p><strong>Electron-Beam Lithography (EBL) System:</strong> 50 kV operation for high-resolution patterning on wafers up to 200 mm.</p>
          </div>

          <!-- ✅ Maskless Aligner + 图片 -->
          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p><strong>Maskless Aligner:</strong> Up to 300 mm wafer size, reticle resolution 600 nm, ideal for flexible and rapid prototyping.</p>
            <div style="text-align: center; margin: 15px 0;">
              {{< figure src="maskless.png" alt="Maskless Aligner" width="30%" >}}
            </div>
          </div>

          <!-- ✅ Mask Aligner -->
          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p><strong>Mask Aligner:</strong> Exposure area up to 210 × 210 mm, equipped with 365 nm, 405 nm, and 435 nm light sources for contact and proximity lithography.</p>
          </div>

          <!-- ✅ Supporting Equipment + 图片 -->
          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p><strong>Supporting Equipment:</strong> Automated coater/developer tracks, spin coaters, and hotplates for full resist application and baking workflows.</p>
            <div style="text-align: center; margin: 15px 0;">
              {{< figure src="Automatic_coaterdeveloper track.png" alt="Automated Coater/Developer Track" width="40%" >}}
            </div>
          </div>
          </div>

          
          <div id="deposition-bay" class="content-panel" style="display: none;">
            <h3 style="color: #8B1538; margin-bottom: 15px;">Deposition Bay</h3>
            <p>
              The Deposition Bay provides advanced thin-film deposition capabilities for metals and metal oxides, supporting device fabrication on wafers up to 200 mm. Key equipment includes:
            </p>

          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p><strong>Electron-Beam Evaporators:</strong> High-purity deposition of metals such as Au, Pt, Ti, Cr, Ni, and others with precise thickness control.</p>
            <div style="text-align: center; margin: 15px 0;">
              {{< figure src="electron_beam_evaporators.png" alt="ASML KrF Stepper" width="50%" >}}
            </div>
          </div>

          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p><strong>Sputtering System:</strong> Deposition of metal oxide films for functional layers in micro/nano devices.</p>
            <div style="text-align: center; margin: 15px 0;">
              {{< figure src="Sputter.png" alt="ASML KrF Stepper" width="80%" >}}
            </div>
          </div>



          </div>
          
          <div id="metrology-other-bay" class="content-panel" style="display: none;">
            <h3 style="color: #8B1538; margin-bottom: 15px;">Metrology & Other Bay</h3>
            <p>
              The Metrology & Other Bay provides comprehensive measurement, inspection, and processing capabilities to ensure precise fabrication and process control. Key tools and capabilities include:
            </p>

          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p><strong>CD-SEM:</strong> High-resolution critical dimension measurement for nanoscale patterns.</p>
            <div style="text-align: center; margin: 15px 0;">
              {{< figure src="CDSEM.png" alt="ASML KrF Stepper" width="50%" >}}
            </div>
          </div>     
          
          
          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p><strong>Optical Microscopes:</strong> Inspection and alignment verification across wafer surfaces.</p>
            <div style="text-align: center; margin: 15px 0;">
              {{< figure src="microscope.png" alt="ASML KrF Stepper" width="50%" >}}

            </div>
          </div>  

          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p><strong>Profilometers:</strong> Surface topography and film thickness measurements for thin films and patterned structures.</p>
            <div style="text-align: center; margin: 15px 0;">
              {{< figure src="Profilometers.png" alt="ASML KrF Stepper" width="50%" >}}
            </div>
          </div>  

          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p><strong>Rapid Thermal Processing (RTP):</strong> Controlled heating for annealing, curing, and other thermal treatments.</p>
            <div style="text-align: center; margin: 15px 0;">
              {{< figure src="Rapid_Thermal_Processing.png" alt="ASML KrF Stepper" width="50%" >}}
            </div>
          </div> 

          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p><strong>O₂ Plasma Asher:</strong> Surface treatment and photoresist removal using oxygen plasma for cleaning and pattern definition.</p>
          </div> 

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

        
        ---
    design:
      columns: '1'
      spacing:
        padding: ['0', '0', '0', '0']

  

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