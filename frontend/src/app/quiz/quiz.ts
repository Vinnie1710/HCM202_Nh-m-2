import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface QuizCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz implements OnInit {
  categories: QuizCategory[] = [
    {
      id: 'independence',
      title: 'Độc lập dân tộc & CNXH',
      description: 'Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội.',
      icon: '🇻🇳',
      color: '#e74c3c'
    },
    {
      id: 'party_state',
      title: 'Đảng & Nhà nước',
      description: 'Tư tưởng về Đảng Cộng sản VN và nhà nước của dân, do dân, vì dân.',
      icon: '🏛️',
      color: '#3498db'
    },
    {
      id: 'solidarity',
      title: 'Đoàn kết dân tộc',
      description: 'Tư tưởng Hồ Chí Minh về đoàn kết dân tộc và đoàn kết quốc tế.',
      icon: '🤝',
      color: '#2ecc71'
    },
    {
      id: 'culture',
      title: 'Văn hóa mới',
      description: 'Tư tưởng Hồ Chí Minh về văn hoá và việc xây dựng nền văn hoá mới.',
      icon: '🎭',
      color: '#9b59b6'
    },
    {
      id: 'ethics',
      title: 'Đạo đức cách mạng',
      description: 'Tư tưởng về đạo đức và những nguyên tắc xây dựng đạo đức cách mạng.',
      icon: '✨',
      color: '#f39c12'
    },
    {
      id: 'human',
      title: 'Phát triển con người',
      description: 'Tư tưởng Hồ Chí Minh về con người và chiến lược phát triển con người.',
      icon: '🌱',
      color: '#1abc9c'
    }
  ];

  allQuestions: Record<string, Question[]> = {
    'independence': [
      { id: 1, text: 'Theo Hồ Chí Minh, mục tiêu cao nhất của cách mạng giải phóng dân tộc là gì?', options: ['Độc lập dân tộc', 'Chủ nghĩa xã hội', 'Ruộng đất cho dân cày', 'Phát triển kinh tế'], correctAnswerIndex: 0, explanation: 'Hồ Chí Minh khẳng định độc lập dân tộc là mục tiêu hàng đầu, là điều kiện tiên quyết để tiến lên chủ nghĩa xã hội.' },
      { id: 2, text: 'Câu nói "Không có gì quý hơn độc lập tự do" được Bác Hồ nêu ra vào năm nào?', options: ['1945', '1954', '1966', '1969'], correctAnswerIndex: 2, explanation: 'Lời kêu gọi này được đưa ra ngày 17/7/1966 khi đế quốc Mỹ leo thang chiến tranh phá hoại miền Bắc.' },
      { id: 3, text: 'Hồ Chí Minh tìm thấy con đường cứu nước (con đường cách mạng vô sản) khi đọc tác phẩm nào?', options: ['Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa', 'Bản án chế độ thực dân Pháp', 'Tuyên ngôn của Đảng Cộng sản', 'Tư bản'], correctAnswerIndex: 0, explanation: 'Tháng 7/1920, Bác đọc bản Sơ thảo của V.I.Lênin và tìm thấy con đường cứu nước đúng đắn.' },
      { id: 4, text: 'Mối quan hệ giữa độc lập dân tộc và chủ nghĩa xã hội theo tư tưởng Hồ Chí Minh là:', options: ['Hai quá trình tách biệt', 'Độc lập dân tộc là tiền đề của CNXH, CNXH là điều kiện vững chắc để bảo vệ độc lập', 'Chủ nghĩa xã hội là tiền đề của độc lập dân tộc', 'Chỉ cần giành được độc lập là đủ'], correctAnswerIndex: 1, explanation: 'Đây là hai giai đoạn gắn bó mật thiết; độc lập là tiền đề, CNXH là đích đến và bảo vệ độc lập vững chắc.' },
      { id: 5, text: 'Theo Hồ Chí Minh, lực lượng của cách mạng giải phóng dân tộc là:', options: ['Chỉ giai cấp công nhân', 'Liên minh công - nông', 'Toàn thể dân tộc', 'Chỉ tầng lớp trí thức'], correctAnswerIndex: 2, explanation: 'Cách mạng là sự nghiệp của quần chúng, lực lượng cách mạng là toàn dân, nòng cốt là liên minh công - nông.' },
      { id: 6, text: 'Tính chất của cách mạng giải phóng dân tộc theo Hồ Chí Minh là:', options: ['Có thể nổ ra và thắng lợi trước cách mạng vô sản ở chính quốc', 'Phụ thuộc hoàn toàn vào cách mạng ở chính quốc', 'Diễn ra đồng thời với cách mạng ở chính quốc', 'Là một phần nhỏ của cách mạng ở chính quốc'], correctAnswerIndex: 0, explanation: 'Đây là luận điểm sáng tạo của Hồ Chí Minh, cho rằng cách mạng thuộc địa có thể chủ động giành thắng lợi trước.' },
      { id: 7, text: 'Đặc trưng cơ bản nhất của chủ nghĩa xã hội theo Hồ Chí Minh là gì?', options: ['Phát triển khoa học công nghệ', 'Không còn chế độ người bóc lột người, mọi người đều ấm no hạnh phúc', 'Xây dựng nhà nước pháp quyền', 'Công nghiệp hóa hiện đại hóa'], correctAnswerIndex: 1, explanation: 'Bác nhấn mạnh bản chất của CNXH là nhằm nâng cao đời sống vật chất và tinh thần của nhân dân, xóa bỏ bóc lột.' },
      { id: 8, text: 'Biện pháp cơ bản nhất để xây dựng chủ nghĩa xã hội theo tư tưởng Hồ Chí Minh?', options: ['Nhờ sự viện trợ của nước ngoài', 'Đem tài dân, sức dân, của dân làm lợi cho dân', 'Phát triển mạnh mẽ quân đội', 'Tiến hành chiến tranh cách mạng'], correctAnswerIndex: 1, explanation: 'Xây dựng CNXH là sự nghiệp của dân, do dân và vì dân; sức mạnh chủ yếu nằm ở chính nhân dân.' },
      { id: 9, text: 'Theo Bác, động lực quan trọng nhất để xây dựng chủ nghĩa xã hội ở nước ta là:', options: ['Vốn đầu tư', 'Tài nguyên thiên nhiên', 'Con người (nhân dân lao động)', 'Khoa học kỹ thuật'], correctAnswerIndex: 2, explanation: 'Con người luôn là yếu tố trung tâm, là động lực quyết định nhất trong tư tưởng Hồ Chí Minh.' },
      { id: 10, text: 'Hồ Chí Minh khẳng định: "Chỉ có ... mới cứu nhân loại, đem lại cho mọi người không phân biệt chủng tộc và nguồn gốc sự tự do, bình đẳng, bác ái, đoàn kết, ấm no trên trái đất."', options: ['Chủ nghĩa tư bản', 'Chủ nghĩa Mác - Lênin', 'Chủ nghĩa cộng sản', 'Cách mạng giải phóng dân tộc'], correctAnswerIndex: 2, explanation: 'Câu nói trích từ bài viết của Bác năm 1921, khẳng định chỉ có chủ nghĩa cộng sản mới đem lại giải phóng thực sự.' }
    ],
    'party_state': [
      { id: 1, text: 'Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa các yếu tố nào?', options: ['Chủ nghĩa Mác-Lênin và phong trào công nhân', 'Chủ nghĩa Mác-Lênin, phong trào công nhân và phong trào yêu nước', 'Chủ nghĩa Mác-Lênin và phong trào yêu nước', 'Phong trào công nhân và phong trào yêu nước'], correctAnswerIndex: 1, explanation: 'Đây là luận điểm sáng tạo của Hồ Chí Minh khi bổ sung thêm yếu tố "phong trào yêu nước" vào quy luật hình thành Đảng.' },
      { id: 2, text: 'Hồ Chí Minh khẳng định bản chất của Đảng Cộng sản Việt Nam là gì?', options: ['Đảng của giai cấp công nhân', 'Đảng của nhân dân lao động', 'Đảng của giai cấp công nhân, của nhân dân lao động và của dân tộc Việt Nam', 'Đảng của tầng lớp trí thức'], correctAnswerIndex: 2, explanation: 'Bác mở rộng khái niệm, khẳng định Đảng không chỉ đại diện cho giai cấp công nhân mà còn cho toàn dân tộc.' },
      { id: 3, text: 'Nguyên tắc tổ chức và sinh hoạt cơ bản nhất của Đảng theo Hồ Chí Minh là gì?', options: ['Tập trung dân chủ', 'Tự phê bình và phê bình', 'Đoàn kết thống nhất', 'Kỷ luật nghiêm minh'], correctAnswerIndex: 0, explanation: 'Tập trung dân chủ là nguyên tắc cốt lõi để đảm bảo sự thống nhất trong ý chí và hành động của Đảng.' },
      { id: 4, text: 'Theo Hồ Chí Minh, quyền lực tối cao của Nhà nước thuộc về ai?', options: ['Quốc hội', 'Đảng Cộng sản', 'Nhân dân', 'Chính phủ'], correctAnswerIndex: 2, explanation: 'Tư tưởng cốt lõi của Bác là Nhà nước "của dân", bao nhiêu quyền hành và lực lượng đều ở nơi dân.' },
      { id: 5, text: 'Hồ Chí Minh đặc biệt nhấn mạnh nguyên tắc nào trong hoạt động của Nhà nước?', options: ['Chuyên chính vô sản', 'Nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ', 'Kinh tế thị trường', 'Bao cấp'], correctAnswerIndex: 1, explanation: 'Bác rất coi trọng việc quản lý nhà nước bằng Hiến pháp và pháp luật ("Trăm đều phải có thần linh pháp quyền").' },
      { id: 6, text: 'Nhà nước "do dân" theo tư tưởng Hồ Chí Minh nghĩa là gì?', options: ['Nhà nước do dân bầu ra và ủng hộ', 'Nhà nước do dân đóng thuế để duy trì', 'Nhà nước do giai cấp công nhân lãnh đạo', 'Nhà nước do tầng lớp trí thức quản lý'], correctAnswerIndex: 0, explanation: 'Nhà nước do dân tạo ra, đại biểu do dân bầu ra, nhân dân có quyền bãi miễn nếu đại biểu không xứng đáng.' },
      { id: 7, text: 'Theo Bác, cán bộ, công chức nhà nước phải là:', options: ['Người cai trị dân', 'Công bộc, đầy tớ trung thành của nhân dân', 'Người có học vấn cao nhất', 'Người có quyền lực nhất'], correctAnswerIndex: 1, explanation: 'Bác nhiều lần căn dặn cán bộ phải là người "đầy tớ trung thành", "công bộc" của nhân dân.' },
      { id: 8, text: 'Hồ Chí Minh coi căn bệnh nào là "giặc nội xâm" nguy hiểm đối với Nhà nước?', options: ['Quan liêu, tham ô, lãng phí', 'Dốt nát', 'Lười biếng', 'Chia rẽ nội bộ'], correctAnswerIndex: 0, explanation: 'Bác gọi tham ô, lãng phí, quan liêu là những "kẻ thù không mang gươm mang súng", vô cùng nguy hiểm.' },
      { id: 9, text: 'Điều kiện tiên quyết để xây dựng Nhà nước trong sạch, vững mạnh theo Hồ Chí Minh là:', options: ['Kinh tế phát triển', 'Sự lãnh đạo của Đảng', 'Quân đội mạnh', 'Luật pháp nghiêm khắc'], correctAnswerIndex: 1, explanation: 'Sự lãnh đạo đúng đắn của Đảng là điều kiện tiên quyết để Nhà nước thực sự là của dân, do dân, vì dân.' },
      { id: 10, text: 'Cuộc Tổng tuyển cử đầu tiên bầu Quốc hội nước Việt Nam Dân chủ Cộng hòa diễn ra vào ngày nào?', options: ['2/9/1945', '6/1/1946', '19/12/1946', '7/5/1954'], correctAnswerIndex: 1, explanation: 'Ngày 6/1/1946, nhân dân ta đi bầu cử, thể hiện rõ tư tưởng xây dựng Nhà nước hợp hiến, hợp pháp của Bác.' }
    ],
    'solidarity': [
      { id: 1, text: 'Hồ Chí Minh khẳng định: "Đoàn kết, đoàn kết, đại đoàn kết. ..."', options: ['Thắng lợi, thắng lợi, đại thắng lợi', 'Thành công, thành công, đại thành công', 'Chiến thắng, chiến thắng, đại chiến thắng', 'Vinh quang, vinh quang, đại vinh quang'], correctAnswerIndex: 1, explanation: 'Đây là câu nói nổi tiếng nhất của Bác về sức mạnh của sự đoàn kết.' },
      { id: 2, text: 'Theo Hồ Chí Minh, hình thức tổ chức của khối đại đoàn kết dân tộc là gì?', options: ['Đảng Cộng sản', 'Mặt trận dân tộc thống nhất', 'Công đoàn', 'Đoàn Thanh niên'], correctAnswerIndex: 1, explanation: 'Mặt trận dân tộc thống nhất (như Việt Minh) là nơi tập hợp, đoàn kết mọi tầng lớp nhân dân.' },
      { id: 3, text: 'Nền tảng của khối đại đoàn kết dân tộc theo Hồ Chí Minh là:', options: ['Liên minh công - nông - trí thức', 'Giai cấp tư sản', 'Tầng lớp thanh niên', 'Giai cấp công nhân'], correctAnswerIndex: 0, explanation: 'Liên minh giữa giai cấp công nhân với giai cấp nông dân và tầng lớp trí thức là nền tảng vững chắc của Mặt trận.' },
      { id: 4, text: 'Nguyên tắc cơ bản để xây dựng và hoạt động của Mặt trận dân tộc thống nhất là:', options: ['Hiệp thương dân chủ', 'Tập trung dân chủ', 'Quyết định theo đa số', 'Lệnh từ cấp trên'], correctAnswerIndex: 0, explanation: 'Hiệp thương dân chủ là nguyên tắc cốt lõi để các tổ chức, cá nhân thảo luận, bàn bạc và đi đến nhất trí.' },
      { id: 5, text: 'Phương châm đoàn kết quốc tế của Hồ Chí Minh là gì?', options: ['Dựa vào sức mình là chính', 'Đoàn kết trên cơ sở độc lập, tự chủ và tôn trọng lẫn nhau', 'Nhờ vào sự giúp đỡ của nước lớn', 'Liên minh quân sự'], correctAnswerIndex: 1, explanation: 'Bác chủ trương làm bạn với tất cả các nước dân chủ, không gây thù oán, tôn trọng độc lập chủ quyền.' },
      { id: 6, text: 'Hồ Chí Minh chủ trương đoàn kết với những lực lượng quốc tế nào?', options: ['Phong trào cộng sản, phong trào giải phóng dân tộc, lực lượng yêu chuộng hòa bình', 'Chỉ các nước XHCN', 'Chỉ các nước láng giềng', 'Chỉ các nước phát triển'], correctAnswerIndex: 0, explanation: 'Bác mở rộng vòng tay đoàn kết với 3 dòng thác cách mạng và mọi lực lượng tiến bộ trên thế giới.' },
      { id: 7, text: 'Theo Hồ Chí Minh, muốn đoàn kết quốc tế tốt, trước hết phải làm gì?', options: ['Có tài chính mạnh', 'Ngoại giao giỏi', 'Đoàn kết trong Đảng và đoàn kết toàn dân', 'Phát triển quân đội'], correctAnswerIndex: 2, explanation: 'Sức mạnh bên trong (đoàn kết toàn dân) là gốc, là cơ sở vững chắc để thực hiện đoàn kết quốc tế.' },
      { id: 8, text: 'Hồ Chí Minh thường ví sức mạnh của đoàn kết như hình ảnh nào?', options: ['Bó đũa', 'Hòn đá', 'Thác nước', 'Ngọn lửa'], correctAnswerIndex: 0, explanation: 'Câu chuyện bó đũa thường được Bác dùng để minh họa: chia rẽ thì yếu, đoàn kết thì mạnh không ai bẻ gãy được.' },
      { id: 9, text: 'Điều kiện để xây dựng khối đại đoàn kết dân tộc theo Hồ Chí Minh là:', options: ['Có chung một tôn giáo', 'Phải có lòng khoan dung, độ lượng', 'Cùng một tầng lớp xã hội', 'Cùng một mức thu nhập'], correctAnswerIndex: 1, explanation: 'Bác nhấn mạnh lòng khoan dung, xóa bỏ định kiến để tập hợp mọi người Việt Nam yêu nước.' },
      { id: 10, text: '"Làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai". Câu nói này thể hiện chính sách gì?', options: ['Chính sách kinh tế mở', 'Chính sách ngoại giao hòa bình, rộng mở', 'Chính sách trung lập', 'Chính sách bế quan tỏa cảng'], correctAnswerIndex: 1, explanation: 'Đây là tuyên bố của Bác năm 1947, khẳng định đường lối đối ngoại hòa bình, hữu nghị của Việt Nam.' }
    ],
    'culture': [
      { id: 1, text: 'Hồ Chí Minh định nghĩa văn hóa như thế nào?', options: ['Là các tác phẩm nghệ thuật', 'Là phong tục tập quán', 'Là sự tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó', 'Là học vấn'], correctAnswerIndex: 2, explanation: 'Năm 1943, Bác định nghĩa văn hóa rất rộng, bao gồm toàn bộ những sáng tạo của con người vì lẽ sinh tồn.' },
      { id: 2, text: 'Theo Hồ Chí Minh, văn hóa có vai trò gì đối với sự phát triển của xã hội?', options: ['Là động lực của sự phát triển', 'Chỉ là hoạt động giải trí', 'Không quan trọng bằng kinh tế', 'Đi sau kinh tế'], correctAnswerIndex: 0, explanation: 'Văn hóa không chỉ phản ánh xã hội mà còn là mục tiêu, động lực thúc đẩy sự phát triển của xã hội.' },
      { id: 3, text: 'Mối quan hệ giữa văn hóa với kinh tế, chính trị theo tư tưởng Hồ Chí Minh?', options: ['Văn hóa đứng trên kinh tế', 'Văn hóa độc lập hoàn toàn', 'Văn hóa phải ở trong kinh tế và chính trị', 'Văn hóa sinh ra kinh tế'], correctAnswerIndex: 2, explanation: 'Bác khẳng định văn hóa không thể đứng ngoài mà phải "ở trong" kinh tế và chính trị, phục vụ nhiệm vụ chính trị.' },
      { id: 4, text: 'Tính chất của nền văn hóa mới mà Hồ Chí Minh chủ trương xây dựng là gì?', options: ['Dân tộc, Khoa học, Đại chúng', 'Tiên tiến, Hiện đại, Hội nhập', 'Truyền thống, Cổ điển, Dân gian', 'Cổ truyền, Độc đáo, Khép kín'], correctAnswerIndex: 0, explanation: 'Đây là 3 tính chất cơ bản được nêu trong Đề cương văn hóa Việt Nam và được Bác tiếp tục phát triển.' },
      { id: 5, text: '"Văn hóa soi đường cho quốc dân đi". Câu nói này được Hồ Chí Minh phát biểu tại đâu?', options: ['Đại hội Đảng lần I', 'Hội nghị Văn hóa toàn quốc lần thứ nhất (1946)', 'Đại hội Đảng lần II', 'Lễ Độc lập'], correctAnswerIndex: 1, explanation: 'Tại Hội nghị Văn hóa toàn quốc 1946, Bác khẳng định vai trò dẫn đường, định hướng của văn hóa.' },
      { id: 6, text: 'Trong xây dựng văn hóa mới, Hồ Chí Minh đặc biệt coi trọng nhiệm vụ nào đầu tiên sau khi giành độc lập?', options: ['Xây dựng rạp hát', 'Diệt giặc dốt (Bình dân học vụ)', 'Phát triển điện ảnh', 'Xây dựng đài phát thanh'], correctAnswerIndex: 1, explanation: 'Ngay sau Độc lập, Bác đã xếp "giặc dốt" là 1 trong 3 thứ giặc cần tiêu diệt (đói, dốt, ngoại xâm).' },
      { id: 7, text: 'Thái độ của Hồ Chí Minh đối với di sản văn hóa dân tộc?', options: ['Xóa bỏ hoàn toàn', 'Kế thừa và phát huy những giá trị tốt đẹp', 'Giữ nguyên không thay đổi gì', 'Chỉ chọn những gì phù hợp với hiện đại'], correctAnswerIndex: 1, explanation: 'Bác chủ trương "Trân trọng giữ gìn và phát huy những truyền thống tốt đẹp của dân tộc".' },
      { id: 8, text: 'Thái độ của Hồ Chí Minh đối với văn hóa nhân loại?', options: ['Từ chối tiếp thu', 'Chỉ tiếp thu văn hóa phương Đông', 'Chỉ tiếp thu văn hóa phương Tây', 'Tiếp thu tinh hoa văn hóa nhân loại có chọn lọc'], correctAnswerIndex: 3, explanation: 'Bác lấy văn hóa dân tộc làm gốc, đồng thời mở rộng tiếp thu tinh hoa văn hóa thế giới để làm giàu văn hóa nước nhà.' },
      { id: 9, text: 'Trung tâm của nền văn hóa mới theo Hồ Chí Minh là gì?', options: ['Văn học nghệ thuật', 'Con người', 'Kinh tế', 'Giáo dục'], correctAnswerIndex: 1, explanation: 'Mọi hoạt động văn hóa đều nhằm mục đích bồi dưỡng, phát triển con người toàn diện.' },
      { id: 10, text: 'Hồ Chí Minh quan niệm thế nào về người nghệ sĩ?', options: ['Nghệ sĩ là người sáng tạo tự do', 'Nghệ sĩ là chiến sĩ trên mặt trận văn hóa', 'Nghệ sĩ không cần quan tâm chính trị', 'Nghệ sĩ chỉ làm nhiệm vụ giải trí'], correctAnswerIndex: 1, explanation: 'Bác căn dặn: "Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy."' }
    ],
    'ethics': [
      { id: 1, text: 'Hồ Chí Minh coi đạo đức cách mạng là gì của người cách mạng?', options: ['Là kỹ năng', 'Là gốc, là nền tảng', 'Là hình thức', 'Là phương tiện'], correctAnswerIndex: 1, explanation: 'Bác ví đạo đức như gốc của cây, ngọn nguồn của sông; người cách mạng phải có đạo đức cách mạng làm nền tảng.' },
      { id: 2, text: 'Phẩm chất đạo đức cơ bản, quan trọng nhất của người cách mạng theo Hồ Chí Minh là:', options: ['Cần kiệm liêm chính', 'Yêu thương con người', 'Trung với nước, hiếu với dân', 'Tinh thần quốc tế trong sáng'], correctAnswerIndex: 2, explanation: 'Trung với nước, hiếu với dân là phẩm chất bao trùm, chi phối các phẩm chất đạo đức khác.' },
      { id: 3, text: '"Cần, Kiệm, Liêm, Chính" theo giải thích của Hồ Chí Minh là:', options: ['Phẩm chất của người dân thường', 'Bốn đức tính của con người như bốn mùa của trời, bốn phương của đất', 'Quy định pháp luật', 'Tiêu chuẩn để kết nạp Đảng'], correctAnswerIndex: 1, explanation: 'Bác nói: "Trời có bốn mùa... Người có bốn đức Cần, Kiệm, Liêm, Chính. Thiếu một đức thì không thành người."' },
      { id: 4, text: 'Theo Hồ Chí Minh, "Chí công vô tư" nghĩa là gì?', options: ['Làm việc gì cũng nghĩ đến lợi ích tập thể trước hết', 'Không có tài sản riêng', 'Chia đều mọi thứ', 'Làm việc không cần nhận lương'], correctAnswerIndex: 0, explanation: 'Chí công vô tư là đặt lợi ích của Đảng, của Tổ quốc, của nhân dân lên trên hết, trước hết.' },
      { id: 5, text: 'Nguyên tắc đầu tiên và quan trọng nhất trong xây dựng đạo đức mới là gì?', options: ['Nói đi đôi với làm, phải nêu gương về đạo đức', 'Xây đi đôi với chống', 'Tu dưỡng đạo đức suốt đời', 'Đọc nhiều sách đạo đức'], correctAnswerIndex: 0, explanation: 'Sự gương mẫu, "Nói đi đôi với làm" là phương pháp giáo dục đạo đức hiệu quả nhất theo tư tưởng của Bác.' },
      { id: 6, text: 'Trong "Xây đi đôi với chống", Hồ Chí Minh nhấn mạnh chống điều gì?', options: ['Chủ nghĩa tư bản', 'Chủ nghĩa cá nhân', 'Đế quốc Mỹ', 'Giặc dốt'], correctAnswerIndex: 1, explanation: 'Bác coi chủ nghĩa cá nhân là "kẻ thù hung ác", là vết tích xấu xa nhất cần phải quét sạch để nâng cao đạo đức.' },
      { id: 7, text: 'Đức tính "Liêm" theo quan điểm của Hồ Chí Minh là:', options: ['Tiết kiệm tiền bạc', 'Chăm chỉ làm việc', 'Trong sạch, không tham lam', 'Thẳng thắn, đứng đắn'], correctAnswerIndex: 2, explanation: 'Liêm là trong sạch, không tham lam của công, không tham địa vị, danh vọng.' },
      { id: 8, text: 'Hồ Chí Minh quan niệm thế nào về tình yêu thương con người?', options: ['Thương hại những người nghèo khổ', 'Yêu thương rộng lớn, sâu sắc, có nguyên tắc (không bao che cái xấu)', 'Yêu thương tất cả không trừ một ai', 'Chỉ yêu thương những người cùng giai cấp'], correctAnswerIndex: 1, explanation: 'Tình yêu thương con người của Bác rất bao la nhưng nghiêm khắc, không bao che cho khuyết điểm.' },
      { id: 9, text: 'Việc tu dưỡng đạo đức cách mạng phải được thực hiện như thế nào?', options: ['Chỉ khi còn trẻ', 'Chỉ khi giữ chức vụ cao', 'Phải tu dưỡng, rèn luyện suốt đời', 'Tu dưỡng trong thời gian ngắn'], correctAnswerIndex: 2, explanation: '"Đạo đức cách mạng không phải trên trời sa xuống... Nó do đấu tranh, rèn luyện bền bỉ hàng ngày mà phát triển và củng cố."' },
      { id: 10, text: 'Trong Bản Di chúc, Bác Hồ căn dặn Đảng ta điều gì đầu tiên về đạo đức?', options: ['Phát triển kinh tế', 'Đảng ta là một Đảng cầm quyền, mỗi đảng viên phải thật sự thấm nhuần đạo đức cách mạng', 'Mở rộng ngoại giao', 'Xây dựng quân đội'], correctAnswerIndex: 1, explanation: 'Bác đặc biệt căn dặn phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, người đầy tớ trung thành.' }
    ],
    'human': [
      { id: 1, text: 'Theo Hồ Chí Minh, con người vừa là mục tiêu, vừa là gì của sự nghiệp cách mạng?', options: ['Vật hy sinh', 'Động lực', 'Công cụ', 'Khách thể'], correctAnswerIndex: 1, explanation: 'Con người là mục tiêu giải phóng, đồng thời cũng chính là động lực quyết định sự thành bại của cách mạng.' },
      { id: 2, text: 'Trọng tâm của chiến lược phát triển con người theo Hồ Chí Minh là gì?', options: ['Sự nghiệp giáo dục ("Trồng người")', 'Phát triển thể thao', 'Tăng cường dinh dưỡng', 'Khuyến khích sinh đẻ'], correctAnswerIndex: 0, explanation: '"Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người."' },
      { id: 3, text: 'Hồ Chí Minh đánh giá cao sức mạnh nào của con người?', options: ['Sức mạnh thể chất', 'Tài sản', 'Lòng yêu nước, sức mạnh tinh thần', 'Địa vị xã hội'], correctAnswerIndex: 2, explanation: 'Bác luôn khơi dậy và phát huy cao độ chủ nghĩa yêu nước, ý chí tự lực tự cường của con người Việt Nam.' },
      { id: 4, text: 'Quan điểm của Hồ Chí Minh về con người là sự thống nhất giữa các yếu tố nào?', options: ['Thể chất và tinh thần', 'Tính cá nhân và tính xã hội (giai cấp, dân tộc, nhân loại)', 'Bản năng và lý trí', 'Kinh tế và văn hóa'], correctAnswerIndex: 1, explanation: 'Bác nhìn nhận con người trong các mối quan hệ xã hội phức tạp: gia đình, giai cấp, dân tộc và nhân loại.' },
      { id: 5, text: 'Mục tiêu giải phóng con người của Hồ Chí Minh hướng tới điều gì?', options: ['Sự giàu có về vật chất', 'Quyền lực chính trị', 'Phát triển tự do, toàn diện, làm chủ bản thân và xã hội', 'Đi du lịch thế giới'], correctAnswerIndex: 2, explanation: 'Giải phóng con người triệt để là mang lại cho họ cuộc sống ấm no, tự do, hạnh phúc và phát triển toàn diện.' },
      { id: 6, text: 'Trong giáo dục con người, Hồ Chí Minh chú trọng rèn luyện hai mặt nào?', options: ['Văn hóa và thể thao', 'Toán học và ngoại ngữ', 'Tài và Đức (Hồng và Chuyên)', 'Lý thuyết và thực hành'], correctAnswerIndex: 2, explanation: '"Có tài mà không có đức là người vô dụng, có đức mà không có tài thì làm việc gì cũng khó."' },
      { id: 7, text: 'Theo Bác, muốn "trồng người" thành công thì phải có lực lượng nào nòng cốt?', options: ['Quân đội', 'Công an', 'Đội ngũ giáo viên, những người làm công tác giáo dục', 'Doanh nhân'], correctAnswerIndex: 2, explanation: 'Bác rất coi trọng vai trò của thầy giáo, cô giáo trong sự nghiệp "trồng người" của đất nước.' },
      { id: 8, text: 'Thái độ của Hồ Chí Minh đối với những người lầm đường lạc lối?', options: ['Trừng trị nghiêm khắc', 'Loại bỏ khỏi xã hội', 'Khoan dung, giáo dục, cảm hóa để họ hướng thiện', 'Bỏ mặc'], correctAnswerIndex: 2, explanation: 'Bác luôn có cái nhìn nhân văn, bao dung, tin tưởng vào phần "thiện" trong mỗi con người để giáo dục, cảm hóa.' },
      { id: 9, text: 'Hồ Chí Minh yêu cầu chăm lo phát triển con người từ lứa tuổi nào?', options: ['Thanh niên', 'Trung niên', 'Chăm lo cho mọi lứa tuổi, đặc biệt quan tâm từ tuổi nhi đồng', 'Người cao tuổi'], correctAnswerIndex: 2, explanation: 'Bác dành tình yêu thương đặc biệt cho thiếu niên, nhi đồng, coi đó là mầm non, tương lai của đất nước.' },
      { id: 10, text: 'Ý nghĩa của việc chăm lo đời sống vật chất và tinh thần cho nhân dân theo tư tưởng Hồ Chí Minh?', options: ['Để dân không biểu tình', 'Là mục tiêu cốt lõi của chủ nghĩa xã hội, phát huy động lực con người', 'Để nhận viện trợ', 'Thể hiện sự giàu có'], correctAnswerIndex: 1, explanation: 'Đó vừa là mục tiêu, vừa là biện pháp để tái tạo và phát huy nguồn động lực vô tận từ con người.' }
    ]
  };

  // State
  activeView: 'categories' | 'quiz' | 'result' = 'categories';
  selectedCategory: QuizCategory | null = null;
  currentQuestions: Question[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  hasAnswered: boolean = false;
  selectedOptionIndex: number | null = null;

  ngOnInit(): void { }

  startCategory(category: QuizCategory) {
    this.selectedCategory = category;
    this.currentQuestions = this.shuffleArray([...this.allQuestions[category.id]]);
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.hasAnswered = false;
    this.selectedOptionIndex = null;
    this.activeView = 'quiz';
  }

  selectOption(index: number) {
    if (this.hasAnswered) return;

    this.selectedOptionIndex = index;
    this.hasAnswered = true;

    if (index === this.currentQuestion.correctAnswerIndex) {
      this.score++;
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
      this.currentQuestionIndex++;
      this.hasAnswered = false;
      this.selectedOptionIndex = null;
    } else {
      this.activeView = 'result';
    }
  }

  restartQuiz() {
    if (this.selectedCategory) {
      this.startCategory(this.selectedCategory);
    }
  }

  backToCategories() {
    this.activeView = 'categories';
    this.selectedCategory = null;
  }

  get currentQuestion(): Question {
    return this.currentQuestions[this.currentQuestionIndex];
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
