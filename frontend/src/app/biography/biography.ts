import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-biography',
  imports: [CommonModule],
  templateUrl: './biography.html',
  styleUrl: './biography.css',
})
export class Biography implements AfterViewInit {

  activeTab: 'timeline' | 'ideology' = 'timeline';

  milestones = [
    {
      year: '1890',
      title: 'Chào đời tại Nghệ An',
      icon: '🌿',
      color: '#4caf50',
      description: 'Nguyễn Sinh Cung (Hồ Chí Minh) sinh ngày 19/5/1890 tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An — vùng đất giàu truyền thống yêu nước.',
      detail: 'Thân phụ là cụ Nguyễn Sinh Sắc — một nhà Nho yêu nước, thân mẫu là bà Hoàng Thị Loan. Tuổi thơ của Người gắn liền với cảnh nghèo khó nhưng đầy ắp tình yêu thương và lòng tự hào dân tộc.',
      side: 'left',
    },
    {
      year: '1906',
      title: 'Theo học tại Huế',
      icon: '📚',
      color: '#2196f3',
      description: 'Năm 1906, theo cha lên Huế, học tại Trường Quốc học Huế — tiếp xúc lần đầu với tư tưởng tự do và bình đẳng từ các sách báo Pháp.',
      detail: 'Tại đây, chứng kiến sự bất công của chế độ thực dân, Người sớm nuôi dưỡng ý chí tìm đường cứu nước. Người học tiếng Pháp và chú tâm nghiên cứu khẩu hiệu "Tự do – Bình đẳng – Bác ái" của Cách mạng Pháp.',
      side: 'right',
    },
    {
      year: '1908',
      title: 'Tham gia phong trào chống thuế',
      icon: '✊',
      color: '#f44336',
      description: 'Tham gia phong trào chống thuế của nông dân Trung Kỳ. Bị chính quyền Pháp nghi ngờ và phải rời Huế.',
      detail: 'Sự kiện này khắc sâu trong tâm trí Người về sự tàn bạo của chế độ thực dân và nỗi thống khổ của người dân. Đây là bước ngoặt thúc đẩy Người quyết tâm ra đi tìm đường cứu nước.',
      side: 'left',
    },
    {
      year: '1911',
      title: 'Rời tổ quốc tìm đường cứu nước',
      icon: '⚓',
      color: '#9c27b0',
      description: 'Ngày 5/6/1911, với tên Văn Ba, Người xuống tàu Admiral Latouche Tréville tại Bến Nhà Rồng, Sài Gòn bắt đầu hành trình tìm đường cứu nước.',
      detail: 'Một quyết định lịch sử! Người đã chọn con đường sang phương Tây để "xem họ làm thế nào rồi sẽ về giúp đồng bào ta". Hành trình đó kéo dài 30 năm bôn ba khắp bốn châu lục.',
      side: 'right',
    },
    {
      year: '1917',
      title: 'Định cư Paris & hoạt động chính trị',
      icon: '🗼',
      color: '#ff9800',
      description: 'Trở về Paris, tham gia Đảng Xã hội Pháp. Bắt đầu viết báo, tham gia các cuộc mít-tinh đòi quyền cho các dân tộc thuộc địa.',
      detail: 'Với bút danh Nguyễn Ái Quốc, Người viết nhiều bài báo tố cáo chủ nghĩa thực dân trên báo L\'Humanité và Le Paria. Người cũng học hỏi kinh nghiệm tổ chức phong trào cách mạng từ những người Pháp tiến bộ.',
      side: 'left',
    },
    {
      year: '1919',
      title: 'Bản yêu sách 8 điểm tại Paris',
      icon: '📜',
      color: '#e91e63',
      description: 'Gửi "Bản yêu sách của nhân dân An Nam" gồm 8 điểm đến Hội nghị Versailles, đòi các quyền tự do dân chủ cho người Việt.',
      detail: 'Đây là lần đầu tiên tên tuổi Nguyễn Ái Quốc vang danh trên trường quốc tế. Dù bị từ chối, sự kiện này là bài học quý giá: muốn giải phóng dân tộc, không thể trông chờ vào lòng tốt của chủ nghĩa đế quốc.',
      side: 'right',
    },
    {
      year: '1920',
      title: 'Tìm thấy Chủ nghĩa Mác-Lênin',
      icon: '⭐',
      color: '#f44336',
      description: 'Đọc "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa" của Lenin. Đây là bước ngoặt tư tưởng vĩ đại — tìm ra con đường giải phóng dân tộc.',
      detail: '"Luận cương của Lenin làm tôi xúc động, phấn khởi, sáng tỏ, tin tưởng biết bao! Tôi vui mừng đến phát khóc lên." — Đây là khoảnh khắc Người tìm ra "ánh sáng soi đường" — Chủ nghĩa Mác-Lênin chính là chân lý cứu nước.',
      side: 'left',
    },
    {
      year: '1920',
      title: 'Gia nhập Đảng Cộng sản Pháp',
      icon: '🌹',
      color: '#c0392b',
      description: 'Bỏ phiếu tán thành gia nhập Quốc tế Cộng sản tại Đại hội Tours. Trở thành một trong những người sáng lập Đảng Cộng sản Pháp.',
      detail: 'Đây là sự lựa chọn dứt khoát theo con đường cách mạng vô sản. Người hiểu rằng chỉ có đứng về phía Quốc tế Cộng sản mới có thể giải phóng các dân tộc bị áp bức.',
      side: 'right',
    },
    {
      year: '1923–1924',
      title: 'Học tập tại Moskva',
      icon: '🏛️',
      color: '#607d8b',
      description: 'Sang Liên Xô học tập tại Trường Đại học Phương Đông (KUTV). Được gặp Lenin và tiếp thu trực tiếp lý luận cách mạng vô sản.',
      detail: 'Đây là thời kỳ Người hệ thống hóa lý luận cách mạng, nghiên cứu kinh nghiệm Cách mạng tháng Mười Nga và chuẩn bị hành trang lý luận để về nước hoạt động.',
      side: 'left',
    },
    {
      year: '1925',
      title: 'Thành lập Hội Việt Nam Cách mạng Thanh niên',
      icon: '🔥',
      color: '#ff5722',
      description: 'Tại Quảng Châu (Trung Quốc), thành lập Hội Việt Nam Cách mạng Thanh niên — tiền thân của Đảng Cộng sản Việt Nam.',
      detail: 'Người mở lớp huấn luyện chính trị, đào tạo hàng trăm thanh niên yêu nước thành những chiến sĩ cách mạng. Tác phẩm "Đường Kách Mệnh" được viết trong thời kỳ này, trở thành kim chỉ nam cho cách mạng Việt Nam.',
      side: 'right',
    },
    {
      year: '1930',
      title: 'Thành lập Đảng Cộng sản Việt Nam',
      icon: '⚒️',
      color: '#c0392b',
      description: 'Ngày 3/2/1930 tại Hồng Kông, chủ trì Hội nghị hợp nhất thành lập Đảng Cộng sản Việt Nam — sự kiện bước ngoặt của lịch sử dân tộc.',
      detail: 'Đảng ra đời là "bước ngoặt vô cùng quan trọng trong lịch sử cách mạng Việt Nam". Từ đây, phong trào cách mạng có người lãnh đạo với đường lối đúng đắn, thống nhất ý chí và hành động.',
      side: 'left',
    },
    {
      year: '1941',
      title: 'Về nước — Thành lập Mặt trận Việt Minh',
      icon: '🏔️',
      color: '#4caf50',
      description: 'Sau 30 năm xa quê hương, Người trở về Cao Bằng (2/1941). Chủ trì Hội nghị Trung ương VIII, thành lập Mặt trận Việt Minh.',
      detail: 'Hang Pác Bó trở thành căn cứ địa lịch sử. Tại đây Người làm thơ, dịch Lịch sử Đảng Cộng sản Liên Xô và trực tiếp lãnh đạo phong trào cách mạng chuẩn bị cho Tổng khởi nghĩa.',
      side: 'right',
    },
    {
      year: '1945',
      title: 'Tổng khởi nghĩa tháng Tám — Độc lập',
      icon: '🌟',
      color: '#ffd700',
      description: 'Lãnh đạo Cách mạng tháng Tám thành công. Ngày 2/9/1945 tại Quảng trường Ba Đình, Người đọc Tuyên ngôn Độc lập khai sinh nước VNDCCH.',
      detail: '"Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được; trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc." — Tuyên ngôn Độc lập 2/9/1945.',
      side: 'left',
    },
    {
      year: '1946–1954',
      title: 'Lãnh đạo kháng chiến chống Pháp',
      icon: '🎖️',
      color: '#ff6b35',
      description: 'Phát lệnh toàn quốc kháng chiến (19/12/1946). Lãnh đạo cuộc kháng chiến 9 năm, kết thúc bằng chiến thắng Điện Biên Phủ lịch sử (7/5/1954).',
      detail: '"Chúng ta thà hi sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ." — Lời kêu gọi toàn quốc kháng chiến. Chiến thắng Điện Biên Phủ đã làm rung chuyển thế giới.',
      side: 'right',
    },
    {
      year: '1955–1969',
      title: 'Xây dựng miền Bắc — Đấu tranh thống nhất',
      icon: '🏗️',
      color: '#2196f3',
      description: 'Lãnh đạo xây dựng chủ nghĩa xã hội ở miền Bắc, đồng thời ủng hộ cuộc đấu tranh giải phóng miền Nam thống nhất đất nước.',
      detail: 'Người sống giản dị trong ngôi nhà sàn, gần gũi với nhân dân, trồng cây, chăm sóc thiếu nhi. Tư tưởng của Người là "không có gì quý hơn độc lập, tự do" — kim chỉ nam cho cả dân tộc.',
      side: 'left',
    },
    {
      year: '1969',
      title: 'Ra đi để lại muôn đời',
      icon: '🕊️',
      color: '#9e9e9e',
      description: 'Ngày 2/9/1969, Chủ tịch Hồ Chí Minh qua đời tại Hà Nội, hưởng thọ 79 tuổi. Di chúc của Người là tài sản tinh thần vô giá cho dân tộc.',
      detail: '"Điều mong muốn cuối cùng của tôi là: Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh, và góp phần xứng đáng vào sự nghiệp cách mạng thế giới." — Di chúc của Chủ tịch Hồ Chí Minh.',
      side: 'right',
    },
  ];

  ideologyStages = [
    {
      period: '1890 – 1911',
      title: 'Hình thành lòng yêu nước',
      icon: '🌱',
      color: '#4caf50',
      subtitle: 'Nền tảng từ gia đình và quê hương',
      content: [
        'Sinh ra trong gia đình Nho học yêu nước, từ nhỏ đã được giáo dục lòng tự hào dân tộc.',
        'Chứng kiến cảnh đất nước bị nô dịch, nhân dân lầm than — khơi dậy ý chí tự giải phóng.',
        'Tiếp xúc với các phong trào Cần Vương, Đông Du của Phan Bội Châu và Phan Châu Trinh, nhận thấy những hạn chế của các con đường này.',
        'Quyết định tìm một con đường mới: phải sang phương Tây học hỏi trực tiếp.',
      ]
    },
    {
      period: '1911 – 1920',
      title: 'Khảo sát thực tiễn — Bôn ba thế giới',
      icon: '🌍',
      color: '#2196f3',
      subtitle: 'Từ yêu nước đến cách mạng vô sản',
      content: [
        'Đi qua Pháp, Anh, Mỹ, châu Phi — trực tiếp quan sát chủ nghĩa thực dân và phong trào công nhân.',
        'Khám phá rằng giai cấp công nhân ở chính quốc cũng bị bóc lột — nhận thức về tính giai cấp trong cách mạng.',
        'Năm 1919: Bản Yêu sách 8 điểm bị từ chối — bài học: không thể trông chờ "lòng tốt" của đế quốc.',
        'Năm 1920: Đọc Luận cương của Lenin — "Ánh sáng soi đường!" — chuyển hướng dứt khoát sang Chủ nghĩa Mác-Lênin.',
      ]
    },
    {
      period: '1920 – 1930',
      title: 'Tiếp thu & Vận dụng Chủ nghĩa Mác-Lênin',
      icon: '⭐',
      color: '#f44336',
      subtitle: 'Xây dựng lý luận cách mạng dân tộc',
      content: [
        'Nghiên cứu sâu lý luận Mác-Lênin, đặc biệt về vấn đề dân tộc và thuộc địa.',
        'Sáng tạo: kết hợp chủ nghĩa yêu nước truyền thống với lý luận cách mạng vô sản — đặc thù Việt Nam.',
        'Viết "Bản án chế độ thực dân Pháp" (1925) — tác phẩm lý luận đầu tiên tố cáo chủ nghĩa thực dân.',
        'Viết "Đường Kách Mệnh" (1927) — đặt nền móng lý luận cho cách mạng Việt Nam.',
        'Thành lập Đảng Cộng sản Việt Nam (1930) — đưa lý luận vào thực tiễn tổ chức.',
      ]
    },
    {
      period: '1930 – 1945',
      title: 'Hoàn thiện đường lối cách mạng',
      icon: '🔥',
      color: '#ff9800',
      subtitle: 'Từ lý luận đến thực tiễn lãnh đạo',
      content: [
        'Xác định lực lượng cách mạng: công nông là nền tảng, trí thức và tư sản dân tộc là đồng minh.',
        'Sáng tạo tư tưởng về Mặt trận đoàn kết dân tộc — tập hợp mọi tầng lớp nhân dân.',
        'Nhận thức về thời cơ cách mạng và nghệ thuật nắm bắt thời cơ (Cách mạng tháng Tám 1945).',
        'Phương châm "dĩ bất biến ứng vạn biến" — nguyên tắc kiên định nhưng phương pháp linh hoạt.',
      ]
    },
    {
      period: '1945 – 1969',
      title: 'Tư tưởng Hồ Chí Minh — Di sản bất diệt',
      icon: '🌟',
      color: '#ffd700',
      subtitle: 'Hệ thống tư tưởng hoàn chỉnh',
      content: [
        'Tư tưởng về độc lập dân tộc gắn liền với chủ nghĩa xã hội — đặc sắc Hồ Chí Minh.',
        'Tư tưởng đại đoàn kết dân tộc — "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công."',
        'Tư tưởng nhân văn: "Không có gì quý hơn độc lập, tự do." Đặt con người làm trung tâm.',
        'Tư tưởng về xây dựng Đảng: Đảng phải thật sự là đầy tớ của nhân dân, cần kiệm liêm chính, chí công vô tư.',
        'Di chúc (1969) — tổng kết cả cuộc đời và định hướng cho tương lai đất nước.',
      ]
    },
  ];

  expandedMilestone: number | null = null;

  setTab(tab: 'timeline' | 'ideology') {
    this.activeTab = tab;
  }

  toggleMilestone(index: number) {
    this.expandedMilestone = this.expandedMilestone === index ? null : index;
  }

  ngAfterViewInit() {
    this.initScrollAnimations();
  }

  private initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      document.querySelectorAll('.milestone-item, .ideology-card, .hero-stat').forEach((el) => {
        observer.observe(el);
      });
    }, 100);
  }
}
