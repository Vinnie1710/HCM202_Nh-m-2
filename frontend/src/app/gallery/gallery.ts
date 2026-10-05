import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  id: number;
  image: string;
  title: string;
  description: string;
  year: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {

  categories = [
    { key: 'all', label: 'Tất cả', icon: '🖼️' },
    { key: 'origin', label: 'Quê hương & Tuổi trẻ', icon: '🌿' },
    { key: 'journey', label: 'Bôn ba hải ngoại', icon: '⚓' },
    { key: 'party', label: 'Hoạt động Đảng', icon: '⚒️' },
    { key: 'people', label: 'Bác với nhân dân', icon: '🤝' },
    { key: 'cadre', label: 'Bác với cán bộ', icon: '🎖️' },
    { key: 'victory', label: 'Chiến thắng & Độc lập', icon: '🌟' },
    { key: 'lastdays', label: 'Những năm cuối đời', icon: '🕊️' },
  ];

  activeCategory = 'all';

  images: GalleryImage[] = [
    // ── QUÊ HƯƠNG & TUỔI TRẺ ──────────────────────────────────────────
    {
      id: 1,
      image: 'assets/images/Ho_Chi_Minh_1946.jpg',
      title: 'Chủ tịch Hồ Chí Minh (1946)',
      description: 'Chân dung Chủ tịch Hồ Chí Minh năm 1946 — một năm sau khi đọc Tuyên ngôn Độc lập.',
      year: '1946',
      category: 'origin',
    },
    {
      id: 2,
      image: 'assets/images/khu-di-tich-kim-lien-1-1024x683 (1).webp',
      title: 'Làng Kim Liên — Quê hương Bác Hồ',
      description: 'Làng Sen (Kim Liên), huyện Nam Đàn, tỉnh Nghệ An — nơi sinh của Nguyễn Sinh Cung (Hồ Chí Minh).',
      year: '1890',
      category: 'origin',
    },
    {
      id: 3,
      image: 'assets/images/bac_ra_di_tim_dg_cuu_nc.jpg',
      title: 'Chân dung Nguyễn Tất Thành thời trẻ',
      description: 'Hình ảnh Nguyễn Tất Thành (Hồ Chí Minh) thời còn trẻ trước khi ra đi tìm đường cứu nước.',
      year: '~1910',
      category: 'origin',
    },

    // ── BÔN BA HẢI NGOẠI ──────────────────────────────────────────────
    {
      id: 4,
      image: 'assets/images/bencangnharong.jpg',
      title: 'Bến cảng Nhà Rồng — Sài Gòn',
      description: 'Bến cảng Nhà Rồng, nơi ngày 5/6/1911 Nguyễn Tất Thành xuống tàu Admiral Latouche Tréville ra đi tìm đường cứu nước.',
      year: '1911',
      category: 'journey',
    },
    {
      id: 5,
      image: 'assets/images/NAQ_paris_Versailles.jpg',
      title: 'Nguyễn Ái Quốc tại Paris (1919)',
      description: 'Nguyễn Ái Quốc (Hồ Chí Minh) tại Paris năm 1919 — thời kỳ gửi Bản yêu sách 8 điểm đến Hội nghị Versailles.',
      year: '1919',
      category: 'journey',
    },
    {
      id: 6,
      image: 'assets/images/Le Paria.jpg',
      title: 'Bác Hồ tại Pháp (1922)',
      description: 'Hồ Chí Minh tại Paris năm 1922, thời kỳ hoạt động trong Đảng Xã hội Pháp và viết báo Le Paria.',
      year: '1922',
      category: 'journey',
    },
    {
      id: 7,
      image: 'assets/images/Thời kỳ Bác hoạt động bí mật tại Hồng Kông — nơi thành lập Đảng Cộng sản Việt Nam năm 1930..jpg',
      title: 'Bác Hồ bôn ba — Hồng Kông (1930)',
      description: 'Thời kỳ Bác hoạt động bí mật tại Hồng Kông — nơi thành lập Đảng Cộng sản Việt Nam năm 1930.',
      year: '1930',
      category: 'journey',
    },

    // ── HOẠT ĐỘNG ĐẢNG ────────────────────────────────────────────────
    {
      id: 8,
      image: 'assets/images/Hồ Chí Minh tại căn cứ địa Việt Bắc trong thời kỳ kháng chiến chống thực dân Pháp (1946–1954)..jpg',
      title: 'Bác Hồ tại căn cứ Việt Bắc',
      description: 'Hồ Chí Minh tại căn cứ địa Việt Bắc trong thời kỳ kháng chiến chống thực dân Pháp (1946–1954).',
      year: '1946–1954',
      category: 'party',
    },
    {
      id: 9,
      image: 'assets/images/Chủ tịch Hồ Chí Minh cùng Đại tướng Võ Nguuyên Giáp — hai lãnh tụ vĩ đại của cách mạng Việt Nam..jpg',
      title: 'Bác Hồ và Đại tướng Võ Nguyên Giáp',
      description: 'Chủ tịch Hồ Chí Minh cùng Đại tướng Võ Nguuyên Giáp — hai lãnh tụ vĩ đại của cách mạng Việt Nam.',
      year: '1945',
      category: 'party',
    },
    {
      id: 10,
      image: 'assets/images/Chủ tịch Hồ Chí Minh trong thời kỳ lãnh đạo cuộc kháng chiến chống thực dân Pháp..jpg',
      title: 'Bác Hồ lãnh đạo kháng chiến (1950)',
      description: 'Chủ tịch Hồ Chí Minh trong thời kỳ lãnh đạo cuộc kháng chiến chống thực dân Pháp.',
      year: '1950',
      category: 'party',
    },

    // ── BÁC VỚI NHÂN DÂN ──────────────────────────────────────────────
    {
      id: 11,
      image: 'assets/images/Chủ tịch Hồ Chí Minh — người cha già yêu dấu luôn quan tâm, thương yêu các cháu thiếu nhi..jpg',
      title: 'Bác Hồ với các cháu thiếu nhi',
      description: 'Chủ tịch Hồ Chí Minh — người cha già yêu dấu luôn quan tâm, thương yêu các cháu thiếu nhi.',
      year: '~1960',
      category: 'people',
    },
    {
      id: 12,
      image: 'assets/images/Chủ tịch Hồ Chí Minh xuống thăm bà con nông dân — Người luôn gần gũi với nhân dân lao động..jpg',
      title: 'Bác Hồ thăm nông dân',
      description: 'Chủ tịch Hồ Chí Minh xuống thăm bà con nông dân — Người luôn gần gũi với nhân dân lao động.',
      year: '~1958',
      category: 'people',
    },
    {
      id: 13,
      image: 'assets/images/Chủ tịch Hồ Chí Minh thăm hỏi công nhân — Người luôn đặt nhân dân lao động làm trung tâm..jpg',
      title: 'Bác Hồ với công nhân',
      description: 'Chủ tịch Hồ Chí Minh thăm hỏi công nhân — Người luôn đặt nhân dân lao động làm trung tâm.',
      year: '1955',
      category: 'people',
    },

    // ── BÁC VỚI CÁN BỘ ────────────────────────────────────────────────
    {
      id: 14,
      image: 'assets/images/Chủ tịch Hồ Chí Minh trong các cuộc gặp gỡ ngoại giao quốc tế — xây dựng tình đoàn kết quốc tế..jpg',
      title: 'Bác Hồ với lãnh đạo quốc tế',
      description: 'Chủ tịch Hồ Chí Minh trong các cuộc gặp gỡ ngoại giao quốc tế — xây dựng tình đoàn kết quốc tế.',
      year: '1955',
      category: 'cadre',
    },
    {
      id: 15,
      image: 'assets/images/Chủ tịch Hồ Chí Minh thăm hỏi, động viên các chiến sĩ quân đội nhân dân Việt Nam..webp',
      title: 'Bác Hồ thăm chiến sĩ',
      description: 'Chủ tịch Hồ Chí Minh thăm hỏi, động viên các chiến sĩ quân đội nhân dân Việt Nam.',
      year: '~1964',
      category: 'cadre',
    },
    {
      id: 16,
      image: 'assets/images/Hình ảnh Chủ tịch Hồ Chí Minh làm việc cần mẫn tại Phủ Chủ tịch — biểu tượng của sự giản dị và tận tụy..jpg',
      title: 'Bác Hồ làm việc tại Phủ Chủ tịch',
      description: 'Hình ảnh Chủ tịch Hồ Chí Minh làm việc cần mẫn tại Phủ Chủ tịch — biểu tượng của sự giản dị và tận tụy.',
      year: '~1960',
      category: 'cadre',
    },

    // ── CHIẾN THẮNG & ĐỘC LẬP ─────────────────────────────────────────
    {
      id: 17,
      image: 'assets/images/Ngày 291945 lịch sử tại Quảng trường Ba Đình.jpg',
      title: 'Bác đọc Tuyên ngôn Độc lập — Ba Đình',
      description: 'Ngày 2/9/1945 lịch sử tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập khai sinh nước VNDCCH.',
      year: '1945',
      category: 'victory',
    },
    {
      id: 18,
      image: 'assets/images/Chiến thắng lịch sử Điện Biên Phủ ngày 751954 — kết thúc 9 năm kháng chiến chống thực dân Pháp..jpg',
      title: 'Chiến thắng Điện Biên Phủ (1954)',
      description: 'Chiến thắng lịch sử Điện Biên Phủ ngày 7/5/1954 — kết thúc 9 năm kháng chiến chống thực dân Pháp.',
      year: '1954',
      category: 'victory',
    },
    {
      id: 19,
      image: 'assets/images/Chủ tịch Hồ Chí Minh sau chiến thắng Điện Biên Phủ lịch sử — niềm vui giải phóng và hoà bình..jpg',
      title: 'Bác Hồ sau chiến thắng Điện Biên Phủ',
      description: 'Chủ tịch Hồ Chí Minh sau chiến thắng Điện Biên Phủ lịch sử — niềm vui giải phóng và hoà bình.',
      year: '1954',
      category: 'victory',
    },

    // ── NHỮNG NĂM CUỐI ĐỜI ────────────────────────────────────────────
    {
      id: 20,
      image: 'assets/images/Ngôi nhà sàn giản dị trong khuôn viên Phủ Chủ tịch — nơi Bác sống và làm việc suốt những năm cuối đời..webp',
      title: 'Ngôi nhà sàn của Bác — Phủ Chủ tịch',
      description: 'Ngôi nhà sàn giản dị trong khuôn viên Phủ Chủ tịch — nơi Bác sống và làm việc suốt những năm cuối đời.',
      year: '1958–1969',
      category: 'lastdays',
    },
    {
      id: 21,
      image: 'assets/images/Hình ảnh Chủ tịch Hồ Chí Minh những năm cuối đời — dù tuổi cao nhưng vẫn miệt mài cống hiến cho đất nước..jpg',
      title: 'Bác Hồ những năm cuối đời',
      description: 'Hình ảnh Chủ tịch Hồ Chí Minh những năm cuối đời — dù tuổi cao nhưng vẫn miệt mài cống hiến cho đất nước.',
      year: '~1968',
      category: 'lastdays',
    },
    {
      id: 22,
      image: 'assets/images/Lăng Chủ tịch Hồ Chí Minh tại Quảng trường Ba Đình, Hà Nội — nơi người dân Việt Nam và bạn bè quốc tế đến viếng thăm..webp',
      title: 'Lăng Chủ tịch Hồ Chí Minh',
      description: 'Lăng Chủ tịch Hồ Chí Minh tại Quảng trường Ba Đình, Hà Nội — nơi người dân Việt Nam và bạn bè quốc tế đến viếng thăm.',
      year: '1975',
      category: 'lastdays',
    },
  ];

  selectedImage: GalleryImage | null = null;
  selectedIndex = -1;

  get filteredImages(): GalleryImage[] {
    if (this.activeCategory === 'all') return this.images;
    return this.images.filter(img => img.category === this.activeCategory);
  }

  setCategory(key: string): void {
    this.activeCategory = key;
    this.closeImage();
  }

  showImage(image: GalleryImage): void {
    const list = this.filteredImages;
    this.selectedImage = image;
    this.selectedIndex = list.findIndex(img => img.id === image.id);
    document.body.style.overflow = 'hidden';
  }

  closeImage(): void {
    this.selectedImage = null;
    this.selectedIndex = -1;
    document.body.style.overflow = '';
  }

  prevImage(): void {
    const list = this.filteredImages;
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.selectedImage = list[this.selectedIndex];
    }
  }

  nextImage(): void {
    const list = this.filteredImages;
    if (this.selectedIndex < list.length - 1) {
      this.selectedIndex++;
      this.selectedImage = list[this.selectedIndex];
    }
  }

  getCountByCategory(key: string): number {
    return this.images.filter(img => img.category === key).length;
  }

  jumpToImage(index: number): void {
    const list = this.filteredImages;
    if (index >= 0 && index < list.length) {
      this.selectedIndex = index;
      this.selectedImage = list[index];
    }
  }

  onImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/hcm-placeholder.svg';
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.selectedImage) return;
    switch (event.key) {
      case 'Escape': this.closeImage(); break;
      case 'ArrowLeft': this.prevImage(); break;
      case 'ArrowRight': this.nextImage(); break;
    }
  }
}