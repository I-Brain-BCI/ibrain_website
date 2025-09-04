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
        
        <div class="d-flex justify-content-center" style="position: relative; display: inline-block;">
          {{< figure src="nanofab_layout.png" alt="Nanofabrication Layout" id="nanofab-image" >}}
          
          <!-- Transparent overlay for click detection -->
          <div class="click-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; pointer-events: none;">
            <a href="./ebl/" class="ebl-area" style="position: absolute; left: 184px; top: 273px; width: 545px; height: 152px; cursor: pointer; pointer-events: all; background: rgba(255,0,0,0.1); border: 2px solid rgba(255,0,0,0.3); display: block; text-decoration: none;" title="Click to view Electron Beam Lithography details"></a>
          </div>
        </div>
    design:
      columns: '1'

  # Facility Navigation Tabs using Hugo Blox
  - block: markdown
    content:
      title: Facility Categories
      text: |
        {{< details summary="🏢 Overview" open="true" >}}
        ### Facility Overview
        Our nanofabrication cleanroom features a complete micro/nano manufacturing process chain, including lithography, thin film deposition, etching, and metrology equipment.
        
        **Key Capabilities:**
        - Electron Beam Lithography (EBL)
        - UV Lithography
        - Physical Vapor Deposition (PVD)
        - Chemical Vapor Deposition (CVD)
        
        **Technical Specifications:**
        - Minimum feature size: 8nm
        - Overlay accuracy: ±10nm
        - Cleanroom class: Class 100
        - Temperature/Humidity control: ±0.1°C, ±1%RH
        {{< /details >}}
        
        {{< details summary="🔬 Lithography" >}}
        ### Electron Beam Lithography (EBL)
        High-precision electron beam lithography system for nanoscale pattern fabrication.
        
        **System Specifications:**
        - **Electron Gun:** Schottky Field Emission, Gaussian beam shape
        - **Acceleration Voltage:** 50 kV
        - **Beam Current Range:** 100 pA – 100 nA
        - **Resolution:** 8 nm
        - **Overlay Accuracy:** ±10 nm
        - **Stitching Accuracy:** ±10 nm
        - **Maximum Exposure Field:** 
          - 2000 μm @ 25 kV
          - 1000 μm @ 50 kV
        - **Maximum Sample Size:** 200 mm
        
        **Maskless Aligner:**
        - **Sample Size:** up to 300 mm
        - **Overlay Accuracy:** ±10 nm
        
        [View Detailed Specifications →](./ebl/)
        {{< /details >}}
        
        {{< details summary="🎯 Thin Film Deposition" >}}
        ### Deposition Systems
        Multiple thin film deposition processes for various materials and thickness requirements.
        
        **Physical Vapor Deposition (PVD):**
        - Sputtering deposition
        - Electron beam evaporation
        - Thermal evaporation
        
        **Chemical Vapor Deposition (CVD):**
        - Plasma Enhanced CVD (PECVD)
        - Low Pressure CVD (LPCVD)
        - Atomic Layer Deposition (ALD)
        
        **Materials Available:**
        - Metals: Au, Pt, Ti, Cr, Al, Cu
        - Dielectrics: SiO₂, Si₃N₄, Al₂O₃
        - Semiconductors: Si, Ge, III-V compounds
        {{< /details >}}
        
        {{< details summary="⚡ Etching" >}}
        ### Etching Processes
        Precision etching equipment for pattern transfer across various materials.
        
        **Dry Etching:**
        - Reactive Ion Etching (RIE)
        - Inductively Coupled Plasma RIE (ICP-RIE)
        - Deep Silicon Etching (DRIE)
        
        **Wet Etching:**
        - Various chemical etchants
        - Selective etching processes
        
        **Specifications:**
        - Etching precision: ±5nm
        - Aspect ratio: up to 50:1
        - Selectivity: >100:1 (material dependent)
        {{< /details >}}
        
        {{< details summary="📊 Metrology & Backend" >}}
        ### Characterization & Testing
        Comprehensive metrology equipment ensuring process quality and device reliability.
        
        **Morphology Characterization:**
        - Scanning Electron Microscopy (SEM)
        - Atomic Force Microscopy (AFM)
        - Optical Microscopy
        - Profilometry
        
        **Electrical Testing:**
        - Probe station testing
        - Parameter analyzers
        - Network analyzers
        - High-frequency measurements
        
        **Material Analysis:**
        - X-ray Photoelectron Spectroscopy (XPS)
        - Energy Dispersive X-ray (EDX)
        - Ellipsometry
        {{< /details >}}
        
        {{< details summary="🔧 Other Facilities" >}}
        ### Supporting Equipment
        Auxiliary facilities and specialized process equipment.
        
        **Cleaning Equipment:**
        - Ultrasonic cleaning
        - Plasma cleaning
        - RCA cleaning stations
        
        **Thermal Processing:**
        - Hot plates
        - Ovens
        - Rapid thermal annealing (RTA)
        
        **Storage & Safety:**
        - Nitrogen cabinets
        - Vacuum storage
        - Chemical storage cabinets
        - Waste treatment systems
        
        **Sample Preparation:**
        - Spin coaters
        - Wire bonders
        - Dicing saws
        - Packaging equipment
        {{< /details >}}
    design:
      columns: '1'

  - block: markdown
    content:
      title: Visit Our Facilities
      subtitle: Schedule a tour or discuss collaboration opportunities
      text: |
        <div style="text-align: center; padding: 40px; background: linear-gradient(135deg, #28a745 0%, #20c997 100%); border-radius: 10px; color: white; margin: 20px 0;">
          <h3 style="color: white; margin-bottom: 20px;">Interested in Our Facilities?</h3>
          <p style="font-size: 18px; margin-bottom: 30px;">Schedule a facility tour or discuss potential collaborations with our team.</p>
          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <a href="../contact/" style="background: white; color: #28a745; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block;">Contact Us</a>
            <a href="mailto:facilities@ibrain-lab.com" style="background: rgba(255,255,255,0.2); color: white; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block; border: 2px solid white;">Schedule Tour</a>
          </div>
        </div>
    design:
      columns: '1'
---