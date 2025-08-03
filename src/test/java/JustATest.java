import org.junit.Test;

import com.keytiles.api.model.common.metadata.v1.MetaData;
import com.keytiles.api.model.common.types.v3.ContainerQueryRangeResponseClass;

public class JustATest {

	@Test
	public void modelTest() {
		ContainerQueryRangeResponseClass response = null;

		MetaData meta = new MetaData("title", "description", 1);
		meta.changelog = null;
	}
}
